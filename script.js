const bank = window.QUESTION_BANK || [];
const storageKey = "web-advanced-quiz-state-v1";
const state = {
  mode: "ordered",
  currentIndex: 0,
  filtered: [],
  responses: {},
  marked: {},
};

const els = {
  setFilter: document.querySelector("#setFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  searchInput: document.querySelector("#searchInput"),
  segments: [...document.querySelectorAll(".segment")],
  nav: document.querySelector("#questionNav"),
  metaSet: document.querySelector("#metaSet"),
  metaType: document.querySelector("#metaType"),
  title: document.querySelector("#questionTitle"),
  answerArea: document.querySelector("#answerArea"),
  feedback: document.querySelector("#feedback"),
  analysis: document.querySelector("#analysisBox"),
  prev: document.querySelector("#prevBtn"),
  next: document.querySelector("#nextBtn"),
  check: document.querySelector("#checkBtn"),
  mark: document.querySelector("#markBtn"),
  total: document.querySelector("#totalCount"),
  done: document.querySelector("#doneCount"),
  right: document.querySelector("#rightCount"),
  accuracy: document.querySelector("#accuracy"),
  progress: document.querySelector("#progressBar"),
};

function unique(values) {
  return [...new Set(values)];
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify({
    responses: state.responses,
    marked: state.marked,
  }));
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    state.responses = saved.responses || {};
    state.marked = saved.marked || {};
  } catch {
    state.responses = {};
    state.marked = {};
  }
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function option(value, label) {
  const node = document.createElement("option");
  node.value = value;
  node.textContent = label;
  return node;
}

function initFilters() {
  els.setFilter.append(option("all", "全部套题"));
  unique(bank.map(q => q.set)).forEach(value => els.setFilter.append(option(value, value)));

  els.typeFilter.append(option("all", "全部题型"));
  unique(bank.map(q => q.type)).forEach(value => els.typeFilter.append(option(value, value)));
}

function normalizeLetters(value) {
  return unique(String(value || "").toUpperCase().match(/[A-Z]/g) || []).sort().join("");
}

function normalizeJudge(value) {
  if (!value) return "";
  return value.includes("正确") ? "正确" : value.includes("错误") ? "错误" : value;
}

function currentQuestion() {
  return state.filtered[state.currentIndex] || null;
}

function applyFilters() {
  const setValue = els.setFilter.value;
  const typeValue = els.typeFilter.value;
  const search = els.searchInput.value.trim().toLowerCase();
  let list = bank.filter(q => {
    const inSet = setValue === "all" || q.set === setValue;
    const inType = typeValue === "all" || q.type === typeValue;
    const text = `${q.stem} ${q.answer} ${q.analysis}`.toLowerCase();
    const inSearch = !search || text.includes(search);
    return inSet && inType && inSearch;
  });

  if (state.mode === "missed") {
    list = list.filter(q => state.responses[q.id]?.status === "wrong");
  }
  if (state.mode === "random") {
    list = shuffle(list);
  }
  state.filtered = list;
  state.currentIndex = Math.min(state.currentIndex, Math.max(0, list.length - 1));
  render();
}

function renderStats() {
  const visibleIds = new Set(state.filtered.map(q => q.id));
  const visibleResponses = Object.entries(state.responses)
    .filter(([id]) => visibleIds.has(id))
    .map(([, response]) => response);
  const done = visibleResponses.filter(r => ["correct", "wrong", "seen"].includes(r.status)).length;
  const right = visibleResponses.filter(r => r.status === "correct").length;
  const accuracy = done ? Math.round((right / done) * 100) : 0;
  els.total.textContent = String(state.filtered.length);
  els.done.textContent = String(done);
  els.right.textContent = String(right);
  els.accuracy.textContent = `${accuracy}%`;
  els.progress.style.width = `${state.filtered.length ? (done / state.filtered.length) * 100 : 0}%`;
}

function renderNav() {
  els.nav.innerHTML = "";
  state.filtered.forEach((q, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = String(index + 1);
    btn.className = [
      index === state.currentIndex ? "active" : "",
      state.responses[q.id]?.status || "",
      state.marked[q.id] ? "marked" : "",
    ].filter(Boolean).join(" ");
    btn.addEventListener("click", () => {
      state.currentIndex = index;
      render();
    });
    els.nav.append(btn);
  });
}

function setFeedback(kind, text) {
  els.feedback.hidden = false;
  els.feedback.className = `feedback ${kind}`;
  els.feedback.textContent = text;
}

function showAnalysis(q) {
  els.analysis.hidden = false;
  els.analysis.textContent = q.analysis ? `解析：${q.analysis}` : "暂无解析";
}

function renderObjective(q, response) {
  els.answerArea.innerHTML = "";
  const inputType = q.type === "多选题" ? "checkbox" : "radio";
  q.options.forEach(choice => {
    const label = document.createElement("label");
    label.className = "choice";
    const input = document.createElement("input");
    input.type = inputType;
    input.name = q.id;
    input.value = choice.label;
    input.checked = (response.selected || []).includes(choice.label);
    input.addEventListener("change", () => {
      const selected = [...els.answerArea.querySelectorAll("input:checked")].map(item => item.value);
      state.responses[q.id] = { ...response, selected, status: response.status || "draft" };
      save();
      renderObjective(q, state.responses[q.id]);
    });
    const text = document.createElement("div");
    text.innerHTML = `<strong>${choice.label}.</strong> ${escapeHtml(choice.text)}`;
    label.append(input, text);
    if (input.checked) label.classList.add("selected");
    els.answerArea.append(label);
  });
}

function renderJudge(q, response) {
  q.options = q.options.length ? q.options : [
    { label: "正确", text: "正确" },
    { label: "错误", text: "错误" },
  ];
  renderObjective(q, response);
}

function renderSubjective(q, response) {
  els.answerArea.innerHTML = "";
  const textarea = document.createElement("textarea");
  textarea.value = response.text || "";
  textarea.placeholder = "在这里写下你的答案";
  textarea.addEventListener("input", () => {
    state.responses[q.id] = { ...response, text: textarea.value, status: response.status || "draft" };
    save();
  });
  els.answerArea.append(textarea);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function render() {
  renderStats();
  renderNav();
  const q = currentQuestion();
  els.feedback.hidden = true;
  els.analysis.hidden = true;
  if (!q) {
    els.metaSet.textContent = "无题目";
    els.metaType.textContent = "";
    els.title.textContent = "当前筛选没有题目";
    els.answerArea.innerHTML = `<p class="empty-state">换一个套题、题型或关键词。</p>`;
    return;
  }
  const response = state.responses[q.id] || {};
  els.metaSet.textContent = q.set;
  els.metaType.textContent = q.section;
  els.title.textContent = `${q.number}、${q.stem}`;
  els.mark.textContent = state.marked[q.id] ? "取消标记" : "标记";
  els.check.textContent = ["填空题", "简答题"].includes(q.type) ? "显示答案" : "确认答案";
  if (q.type === "判断题") {
    renderJudge(q, response);
  } else if (["填空题", "简答题"].includes(q.type)) {
    renderSubjective(q, response);
  } else {
    renderObjective(q, response);
  }
  if (response.status === "correct") {
    setFeedback("correct", `答对了。正确答案：${q.answer}`);
    showAnalysis(q);
  } else if (response.status === "wrong") {
    setFeedback("wrong", `还差一点。正确答案：${q.answer}`);
    showAnalysis(q);
  } else if (response.status === "seen") {
    setFeedback("info", `参考答案：${q.answer}`);
    showAnalysis(q);
  }
}

function checkAnswer() {
  const q = currentQuestion();
  if (!q) return;
  const response = state.responses[q.id] || {};
  if (["填空题", "简答题"].includes(q.type)) {
    state.responses[q.id] = { ...response, status: "seen" };
    save();
    render();
    return;
  }
  const selected = response.selected || [];
  let isRight = false;
  if (q.type === "判断题") {
    isRight = normalizeJudge(selected[0]) === normalizeJudge(q.answer);
  } else {
    isRight = normalizeLetters(selected.join("")) === normalizeLetters(q.answer);
  }
  state.responses[q.id] = { ...response, selected, status: isRight ? "correct" : "wrong" };
  save();
  render();
}

function move(delta) {
  if (!state.filtered.length) return;
  state.currentIndex = Math.max(0, Math.min(state.filtered.length - 1, state.currentIndex + delta));
  render();
}

function bindEvents() {
  els.setFilter.addEventListener("change", () => {
    state.currentIndex = 0;
    applyFilters();
  });
  els.typeFilter.addEventListener("change", () => {
    state.currentIndex = 0;
    applyFilters();
  });
  els.searchInput.addEventListener("input", () => {
    state.currentIndex = 0;
    applyFilters();
  });
  els.segments.forEach(button => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      els.segments.forEach(item => item.classList.toggle("active", item === button));
      state.currentIndex = 0;
      applyFilters();
    });
  });
  els.prev.addEventListener("click", () => move(-1));
  els.next.addEventListener("click", () => move(1));
  els.check.addEventListener("click", checkAnswer);
  els.mark.addEventListener("click", () => {
    const q = currentQuestion();
    if (!q) return;
    state.marked[q.id] = !state.marked[q.id];
    save();
    render();
  });
}

load();
initFilters();
bindEvents();
applyFilters();
