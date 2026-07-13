(function () {
  const bank = Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : [];
  const storeKey = "mobileCrossQuizState";

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  const el = {
    statTotal: document.getElementById("statTotal"),
    statDone: document.getElementById("statDone"),
    statAccuracy: document.getElementById("statAccuracy"),
    modeSelect: document.getElementById("modeSelect"),
    typeSelect: document.getElementById("typeSelect"),
    amountInput: document.getElementById("amountInput"),
    startBtn: document.getElementById("startBtn"),
    resetBtn: document.getElementById("resetBtn"),
    roundInfo: document.getElementById("roundInfo"),
    wrongInfo: document.getElementById("wrongInfo"),
    sourceBadge: document.getElementById("sourceBadge"),
    typeBadge: document.getElementById("typeBadge"),
    progressBar: document.getElementById("progressBar"),
    questionMeta: document.getElementById("questionMeta"),
    questionText: document.getElementById("questionText"),
    answerArea: document.getElementById("answerArea"),
    feedbackBox: document.getElementById("feedbackBox"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    checkBtn: document.getElementById("checkBtn"),
    answerBtn: document.getElementById("answerBtn"),
    exportBtn: document.getElementById("exportBtn"),
    importBtn: document.getElementById("importBtn"),
    syncText: document.getElementById("syncText"),
    syncStatus: document.getElementById("syncStatus")
  };

  const state = {
    queue: [],
    index: 0,
    responses: {},
    checked: {},
    selected: {},
    events: [],
    wrongIds: new Set(),
    correctCount: 0,
    answeredCount: 0
  };

  function eventId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }

  function summarizeEvents(events) {
    const summary = {
      attempts: 0,
      correct: 0,
      latestByQuestion: new Map()
    };
    events.forEach((event) => {
      if (!event || !event.questionId) return;
      summary.attempts += 1;
      if (event.correct === true) summary.correct += 1;
      const existing = summary.latestByQuestion.get(event.questionId);
      if (!existing || Number(event.at || 0) >= Number(existing.at || 0)) {
        summary.latestByQuestion.set(event.questionId, event);
      }
    });
    return summary;
  }

  function deriveWrongIds(events, fallbackWrongIds) {
    const wrong = new Set(Array.isArray(fallbackWrongIds) ? fallbackWrongIds : []);
    const summary = summarizeEvents(events);
    summary.latestByQuestion.forEach((event, questionId) => {
      if (event.correct === true) wrong.delete(questionId);
      if (event.correct === false) wrong.add(questionId);
    });
    return wrong;
  }

  function loadStore() {
    try {
      const saved = JSON.parse(localStorage.getItem(storeKey) || "{}");
      state.events = Array.isArray(saved.events) ? saved.events : [];
      state.wrongIds = deriveWrongIds(state.events, saved.wrongIds);
    } catch (error) {
      state.events = [];
      state.wrongIds = new Set();
    }
  }

  function saveStore() {
    localStorage.setItem(storeKey, JSON.stringify({
      version: 2,
      savedAt: new Date().toISOString(),
      events: state.events,
      wrongIds: Array.from(state.wrongIds)
    }));
  }

  function setSyncStatus(message, kind) {
    if (!el.syncStatus) return;
    el.syncStatus.textContent = message;
    el.syncStatus.dataset.kind = kind || "info";
  }

  function toBase64(text) {
    const bytes = new TextEncoder().encode(text);
    let binary = "";
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  }

  function fromBase64(text) {
    const binary = atob(text);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  function exportSyncCode() {
    const payload = {
      app: "mobile-cross-quiz",
      version: 2,
      exportedAt: new Date().toISOString(),
      events: state.events,
      wrongIds: Array.from(state.wrongIds)
    };
    const code = "MCQ2." + toBase64(JSON.stringify(payload));
    el.syncText.value = code;
    el.syncText.focus();
    el.syncText.select();
    navigator.clipboard?.writeText(code)
      .then(() => setSyncStatus("同步码已生成并复制。到另一台设备粘贴后点导入即可。", "ok"))
      .catch(() => setSyncStatus("同步码已生成。复制这段内容到另一台设备导入。", "ok"));
  }

  function parseSyncCode(raw) {
    const text = String(raw || "").trim();
    if (!text) throw new Error("empty");
    if (text.startsWith("{")) return JSON.parse(text);
    const normalized = text.startsWith("MCQ2.") ? text.slice(5) : text;
    return JSON.parse(fromBase64(normalized));
  }

  function importSyncCode() {
    let payload;
    try {
      payload = parseSyncCode(el.syncText.value);
    } catch (error) {
      setSyncStatus("同步码无法识别，检查有没有复制完整。", "bad");
      return;
    }
    if (!payload || !Array.isArray(payload.events)) {
      setSyncStatus("同步码里没有可合并的做题记录。", "bad");
      return;
    }

    const byId = new Map();
    state.events.forEach((event) => byId.set(event.id, event));
    let added = 0;
    payload.events.forEach((event) => {
      if (!event || !event.id || !event.questionId) return;
      if (!byId.has(event.id)) {
        byId.set(event.id, event);
        added += 1;
      }
    });
    state.events = Array.from(byId.values()).sort((a, b) => Number(a.at || 0) - Number(b.at || 0));
    state.wrongIds = deriveWrongIds(state.events, payload.wrongIds);
    saveStore();
    render();
    setSyncStatus(`已合并 ${added} 条新记录。重复导入不会重复计数。`, "ok");
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function normalizeText(value) {
    return String(value || "")
      .trim()
      .replace(/\s+/g, "")
      .replace(/[，。；;：:、]/g, "")
      .toLowerCase();
  }

  function currentQuestion() {
    return state.queue[state.index] || null;
  }

  function selectedAnswers(question) {
    const value = state.selected[question.id];
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }

  function sameAnswer(left, right) {
    const a = left.slice().sort().join("|");
    const b = right.slice().sort().join("|");
    return a === b;
  }

  function buildQueue() {
    const type = el.typeSelect.value;
    const mode = el.modeSelect.value;
    let list = bank.filter((q) => type === "all" || q.type === type);

    if (mode === "wrong") {
      list = list.filter((q) => state.wrongIds.has(q.id));
    }

    if (mode === "random") {
      list = shuffle(list);
    } else {
      list = list.slice().sort((a, b) => {
        if (a.source === b.source) return a.number - b.number;
        return a.source.localeCompare(b.source, "zh-CN");
      });
    }

    const requested = Math.max(1, Number(el.amountInput.value) || 1);
    return list.slice(0, Math.min(requested, list.length));
  }

  function startRound() {
    state.queue = buildQueue();
    state.index = 0;
    state.responses = {};
    state.checked = {};
    state.selected = {};
    state.correctCount = 0;
    state.answeredCount = 0;
    render();
  }

  function clearProgress() {
    const ok = window.confirm("确定清空本机所有做题记录和错题记录吗？");
    if (!ok) return;
    state.queue = [];
    state.index = 0;
    state.responses = {};
    state.checked = {};
    state.selected = {};
    state.correctCount = 0;
    state.answeredCount = 0;
    state.events = [];
    state.wrongIds.clear();
    saveStore();
    setSyncStatus("已清空本机做题记录。");
    render();
  }

  function setFeedback(kind, title, body, extraHtml) {
    el.feedbackBox.className = "feedback " + (kind || "warn");
    el.feedbackBox.innerHTML = `<strong>${title}</strong><div>${body}</div>${extraHtml || ""}`;
    el.feedbackBox.classList.remove("hidden");
  }

  function hideFeedback() {
    el.feedbackBox.className = "feedback hidden";
    el.feedbackBox.textContent = "";
  }

  function optionButton(question, option) {
    const selected = selectedAnswers(question).includes(option.label);
    const checked = state.checked[question.id];
    const correct = question.answer && question.answer.includes(option.label);
    const optionText = question.type === "judge"
      ? (option.label === "对" ? "正确" : "错误")
      : option.text;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option" + (selected ? " selected" : "");
    if (checked && correct) btn.classList.add("correct");
    if (checked && selected && !correct) btn.classList.add("wrong");
    btn.innerHTML = `<span class="option-key">${option.label}</span><span class="option-text">${optionText}</span>`;
    btn.addEventListener("click", () => {
      if (state.checked[question.id]) return;
      if (question.type === "multiple") {
        const current = new Set(selectedAnswers(question));
        if (current.has(option.label)) current.delete(option.label);
        else current.add(option.label);
        state.selected[question.id] = Array.from(current);
      } else {
        state.selected[question.id] = [option.label];
      }
      renderAnswerArea(question);
      hideFeedback();
    });
    return btn;
  }

  function renderFill(question) {
    const wrap = document.createElement("div");
    wrap.className = "blank-list";
    const existing = state.responses[question.id] || [];
    const count = Math.max(1, question.blankAnswers ? question.blankAnswers.length : 1);
    for (let i = 0; i < count; i += 1) {
      const item = document.createElement("div");
      item.className = "blank-item";
      const label = document.createElement("label");
      label.textContent = `第 ${i + 1} 空`;
      const input = document.createElement("input");
      input.value = existing[i] || "";
      input.disabled = Boolean(state.checked[question.id]);
      input.addEventListener("input", () => {
        const next = state.responses[question.id] ? state.responses[question.id].slice() : [];
        next[i] = input.value;
        state.responses[question.id] = next;
      });
      item.append(label, input);
      wrap.appendChild(item);
    }
    el.answerArea.appendChild(wrap);
  }

  function renderShort(question) {
    const textarea = document.createElement("textarea");
    textarea.value = state.responses[question.id] || "";
    textarea.disabled = Boolean(state.checked[question.id]);
    textarea.addEventListener("input", () => {
      state.responses[question.id] = textarea.value;
    });
    el.answerArea.appendChild(textarea);
  }

  function renderAnswerArea(question) {
    el.answerArea.innerHTML = "";
    if (!question) return;
    if (question.type === "fill") {
      renderFill(question);
      return;
    }
    if (question.type === "short") {
      renderShort(question);
      return;
    }
    question.options.forEach((option) => {
      el.answerArea.appendChild(optionButton(question, option));
    });
  }

  function updateStats() {
    const summary = summarizeEvents(state.events);
    el.statTotal.textContent = String(bank.length);
    el.statDone.textContent = String(summary.attempts);
    el.statAccuracy.textContent = summary.attempts
      ? Math.round((summary.correct / summary.attempts) * 100) + "%"
      : "0%";
    el.wrongInfo.textContent = String(state.wrongIds.size);
    el.roundInfo.textContent = `${Math.min(state.index + 1, state.queue.length || 0)} / ${state.queue.length}`;
  }

  function renderEmpty() {
    el.sourceBadge.textContent = "未开始";
    el.typeBadge.textContent = "题型";
    el.questionMeta.textContent = "选择模式后开始练习";
    el.questionText.textContent = bank.length ? "准备好了就开刷。" : "题库数据没有加载成功。";
    el.answerArea.innerHTML = "";
    hideFeedback();
    el.progressBar.style.width = "0%";
    el.prevBtn.disabled = true;
    el.nextBtn.disabled = true;
    el.checkBtn.disabled = true;
    el.answerBtn.disabled = true;
  }

  function render() {
    updateStats();
    const question = currentQuestion();
    if (!question) {
      renderEmpty();
      return;
    }

    const total = state.queue.length;
    const ordinal = state.index + 1;
    el.sourceBadge.textContent = question.source;
    el.typeBadge.textContent = question.typeLabel;
    el.questionMeta.textContent = `第 ${ordinal} / ${total} 题 · 原题 ${question.number}`;
    el.questionText.textContent = question.question;
    el.progressBar.style.width = total ? `${Math.round((ordinal / total) * 100)}%` : "0%";
    el.prevBtn.disabled = state.index <= 0;
    el.nextBtn.disabled = state.index >= total - 1;
    el.checkBtn.disabled = Boolean(state.checked[question.id]);
    el.answerBtn.disabled = false;
    renderAnswerArea(question);

    if (state.checked[question.id]) {
      showStoredFeedback(question);
    } else {
      hideFeedback();
    }
  }

  function recordResult(question, correct) {
    if (!state.checked[question.id]) {
      state.answeredCount += 1;
      if (correct) state.correctCount += 1;
      state.events.push({
        id: eventId(),
        questionId: question.id,
        source: question.source,
        number: question.number,
        type: question.type,
        correct: Boolean(correct),
        at: Date.now()
      });
    }
    state.checked[question.id] = { correct };
    if (currentQuestion() && currentQuestion().id === question.id) {
      el.checkBtn.disabled = true;
    }
    if (correct) state.wrongIds.delete(question.id);
    else state.wrongIds.add(question.id);
    saveStore();
  }

  function showStoredFeedback(question) {
    const checked = state.checked[question.id];
    if (!checked) return;
    if (question.type === "short") {
      setFeedback("warn", "参考答案", question.modelAnswer || "暂无参考答案。", selfCheckButtons(question));
      return;
    }
    if (checked.correct) {
      setFeedback("good", "正确", question.explanation || "这题答对了。");
    } else {
      const answer = displayAnswer(question);
      setFeedback("bad", "再看一眼", `参考答案：${answer}<br>${question.explanation || ""}`);
    }
  }

  function displayAnswer(question) {
    if (question.type === "fill") {
      return (question.blankAnswers || []).map((group) => group[0]).join("；");
    }
    if (question.type === "judge") {
      return question.answer.join("");
    }
    return question.answer.join("");
  }

  function selfCheckButtons(question) {
    return `
      <div class="self-check">
        <button class="primary-btn" type="button" data-self="right">算对</button>
        <button class="ghost-btn" type="button" data-self="wrong">算错</button>
      </div>
    `;
  }

  function checkFill(question) {
    const values = state.responses[question.id] || [];
    const groups = question.blankAnswers || [];
    const correct = groups.every((answers, index) => {
      const value = normalizeText(values[index]);
      return answers.some((answer) => normalizeText(answer) === value);
    });
    recordResult(question, correct);
    renderAnswerArea(question);
    if (correct) {
      setFeedback("good", "正确", question.explanation || "填空答案匹配。");
    } else {
      setFeedback("bad", "再看一眼", `参考答案：${displayAnswer(question)}`);
    }
    updateStats();
  }

  function checkChoice(question) {
    const selected = selectedAnswers(question);
    if (!selected.length) {
      setFeedback("warn", "还没有选择", "先选一个答案。");
      return;
    }
    const correct = sameAnswer(selected, question.answer || []);
    recordResult(question, correct);
    renderAnswerArea(question);
    if (correct) {
      setFeedback("good", "正确", question.explanation || "这题答对了。");
    } else {
      setFeedback("bad", "再看一眼", `参考答案：${displayAnswer(question)}<br>${question.explanation || ""}`);
    }
    updateStats();
  }

  function checkShort(question) {
    setFeedback("warn", "参考答案", question.modelAnswer || "暂无参考答案。", selfCheckButtons(question));
  }

  function checkCurrent() {
    const question = currentQuestion();
    if (!question || state.checked[question.id]) return;
    if (question.type === "fill") checkFill(question);
    else if (question.type === "short") checkShort(question);
    else checkChoice(question);
  }

  function showAnswer() {
    const question = currentQuestion();
    if (!question) return;
    if (question.type === "short") {
      setFeedback("warn", "参考答案", question.modelAnswer || "暂无参考答案。", selfCheckButtons(question));
      return;
    }
    setFeedback("warn", "参考答案", `${displayAnswer(question)}<br>${question.explanation || ""}`);
  }

  function jump(delta) {
    const next = state.index + delta;
    if (next < 0 || next >= state.queue.length) return;
    state.index = next;
    render();
  }

  el.startBtn.addEventListener("click", startRound);
  el.resetBtn.addEventListener("click", clearProgress);
  el.prevBtn.addEventListener("click", () => jump(-1));
  el.nextBtn.addEventListener("click", () => jump(1));
  el.checkBtn.addEventListener("click", checkCurrent);
  el.answerBtn.addEventListener("click", showAnswer);
  el.exportBtn?.addEventListener("click", exportSyncCode);
  el.importBtn?.addEventListener("click", importSyncCode);

  el.feedbackBox.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-self]");
    const question = currentQuestion();
    if (!btn || !question) return;
    const correct = btn.getAttribute("data-self") === "right";
    recordResult(question, correct);
    render();
  });

  el.modeSelect.addEventListener("change", () => {
    if (el.modeSelect.value === "wrong" && state.wrongIds.size === 0) {
      el.amountInput.value = "1";
    }
  });

  loadStore();
  el.amountInput.max = String(bank.length || 217);
  setSyncStatus("不同网络也能同步：导出同步码，发到另一台设备后导入。");
  render();
})();
