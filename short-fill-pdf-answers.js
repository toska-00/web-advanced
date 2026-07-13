// Strictly copied from the "正确答案" field in 简答+填空.pdf.
const PDF_CORRECT_FILL_ANSWERS = {
  1: ["type", "size"],
  2: ["color", "rotate"],
  3: ["标题栏展示", "宫格布局的组件"],
  4: ["xs", "xl"],
  5: ["onError", "onShow"],
  6: ["interval", "duration"],
  7: ["vertical", "circular"],
  8: ["scroll-y", "scroll-left"],
  9: ["pending", "fulfilled", "rejected"],
  10: ["resolve", "reject"],
  11: ["请求方法下拉菜单"],
  12: ["Console(控制台)"],
  13: ["header", "{}"],
  14: ["url", "没有"],
  15: ["拒绝的原因"],
  16: ["Promise 兑现的值"],
  17: ["兑现"],
  18: ["兑现"],
  19: ["icon", "title"],
  20: ["timeout", "complete"],
  21: ["onReachBottom; 页面数据"],
  22: ["true"],
  23: ["current;urls 数组中的第一张图片"],
  24: ["数组", "图片 URL"]
};

const PDF_FILL_EXPLANATIONS = {
  1: "type 属性用于指定图标名称，size 属性用于调整图标大小。",
  2: "color 属性用于指定图标颜色，rotate 属性用于调整图标旋转角度。",
  3: "uni-section 组件用于实现标题栏展示，uni-grid 组件用于实现宫格布局。",
  4: "屏幕小于 768px 对应 xs 断点；屏幕大于等于 1200px 对应 xl 断点。每行分别显示 2 个和 4 个元素时，每列应占 12 和 6 栅格。",
  5: "onError 用于监听应用程序报错，onShow 在应用启动或从后台进入前台时触发。",
  6: "interval 设置自动切换间隔，duration 设置滑动动画时长，单位均为毫秒。",
  7: "vertical 设置纵向滑动，circular 设置衔接滑动，也就是循环播放。",
  8: "scroll-y 控制纵向滚动，scroll-left 设置横向滚动位置。",
  9: "Promise 有 pending、fulfilled、rejected 三种状态，状态一旦改变便不可逆转。",
  10: "executor 的参数是 resolve 和 reject，分别用于将 Promise 状态改为 fulfilled 和 rejected。",
  11: "Postman 可通过请求方法下拉菜单选择 GET、POST、PUT、DELETE 等请求方法。",
  12: "Postman 的 Console（控制台）可以查看请求和响应的 Headers、Cookies、Body 等详细信息。",
  13: "header 参数用于设置请求头，其默认值为空对象 { }。",
  14: "url 参数用于设置请求地址，是必填项，没有默认值。",
  15: "Promise 被拒绝时，await 表达式会抛出拒绝的原因，可使用 try-catch 捕获。",
  16: "Promise 被兑现时，await 表达式的值会变成 Promise 的兑现值。",
  17: "Promise.allSettled 会在所有输入的 Promise 都敲定时兑现，无论它们是兑现还是拒绝。",
  18: "Promise.race 返回的 Promise 与第一个敲定的 Promise 状态一致，无论成功还是拒绝。",
  19: "uni.showToast 中，icon 设置提示图标，title 设置具体提示文字。",
  20: "uni.request 中，timeout 设置超时时间，complete 在请求结束时执行，无论成功、失败或超时。",
  21: "onReachBottom 在页面滚动到底部时触发，可用于加载更多数据并更新页面。",
  22: "在 pages.json 中把 enablePullDownRefresh 设置为 true，并在页面中定义 onPullDownRefresh 处理刷新。",
  23: "current 指定当前显示的图片；不设置时默认显示 urls 数组中的第一张图片。",
  24: "urls 是数组，其中每个元素都是一个图片 URL。"
};

const PDF_CORRECT_SHORT_ANSWERS = {
  25: "<view> 是块级容器组件，类似于 HTML 中的 <div>，用于页面布局和容纳其他组件，支持多种触摸事件。<text> 是行内文本组件，类似于 HTML 中的 <span>，专门用于显示文本内容，文本节点必须被 <text> 包裹，且内部不能嵌套 <view> 等块级组件。",
  26: "indicator-dots：是否显示底部的指示点（小圆点），用于提示当前轮播位置。autoplay：是否自动轮播切换。interval：自动切换的时间间隔，单位为毫秒。duration：滑动动画时长，单位为毫秒。circular：是否采用循环播放模式。",
  27: "在 pages.json 中对应页面的配置项中设置 \"enablePullDownRefresh\": true。在页面的 methods 或生命周期中定义 onPullDownRefresh 方法，该方法会在用户下拉时自动触发。在 onPullDownRefresh 中执行数据刷新逻辑，刷新完成后调用 uni.stopPullDownRefresh() 停止刷新动画。",
  28: "uni.navigateTo：保留当前页面，跳转到应用内的非 tabBar 页面，可通过返回按钮回到原页面。uni.redirectTo：关闭当前页面，跳转到应用内的非 tabBar 页面，用户无法返回原页面。",
  29: "方式一（通过 URL 参数）：在跳转时在 URL 后拼接参数，如 uni.navigateTo({ url: '/pages/detail/detail?id=123' })，在目标页面的 onLoad 生命周期中通过 options 对象接收。方式二（通过全局数据/状态管理）：使用 uni.$emit 和 uni.$on 进行事件通信，或使用 Vuex/Pinia 进行状态管理。",
  30: "success：网络请求成功且服务器返回状态码为 2xx 时触发。fail：网络请求失败（如网络断开、超时、URL 无效等）时触发。complete：无论请求成功或失败，都会在请求结束后触发（先于 success/fail 执行完毕之后调用）。",
  31: "404 表示请求的资源在服务器上未找到，可能是接口 URL 路径错误、接口已下线或参数传递错误导致路由无法匹配。前端应检查请求 URL 是否正确，确认接口地址和参数拼接无误；同时可在 fail 回调中捕获错误并给予用户友好提示（如“请求的资源不存在”）。",
  32: "在 Postman 中可以使用环境变量（Environment Variables）来管理不同环境的请求地址。操作步骤：点击右上角的“环境”管理，创建不同的环境（如 Dev、Test、Prod），在每个环境中定义变量（如 base_url），然后在请求 URL 中使用 {{base_url}}/api/xxx 的方式引用。切换环境时，所有请求的 base_url 会自动变更。",
  33: "在 Postman 中发送请求后，可以在响应面板中查看 Timing 部分。Timing 会展示 DNS 解析、TCP 连接、请求发送、等待服务器响应（TTFB）以及内容下载等各个阶段的耗时，帮助分析接口性能瓶颈。",
  34: "方式一（保存到集合）：点击请求面板右上角的 Save 按钮，将当前请求保存到指定的 Collection（集合）中，可进行分类管理。方式二（保存到历史记录）：发送请求后，该请求会自动保存在左侧的 History（历史记录）中，可以随时点击重新发送。",
  35: "pending（进行中）：初始状态，操作尚未完成。fulfilled（已成功）：操作成功完成，调用 resolve 时状态变为 fulfilled。rejected（已失败）：操作失败，调用 reject 或抛出异常时状态变为 rejected。Promise 的状态一旦从 pending 变为 fulfilled 或 rejected，就不可再改变。",
  36: "then 方法会返回一个新的 Promise，因此可以在一个 then 后面继续调用 then，形成链式调用。前一个 then 中返回的值（或 Promise）会作为下一个 then 的参数传入。优势：避免了“回调地狱”（多层嵌套回调），使异步代码更加清晰、易于阅读和维护，并且便于进行统一的错误处理（catch）。",
  37: "Promise.all：接收一个 Promise 数组（或可迭代对象），等待所有 Promise 都成功兑现（fulfilled）后，返回一个包含所有结果的数组；如果其中任何一个被拒绝（rejected），则立即返回该拒绝原因。Promise.race：接收一个 Promise 数组，只要其中任何一个 Promise 率先敲定（无论成功或失败），就立即返回该 Promise 的结果。",
  38: "前端需要将相对路径与 Base URL 进行拼接，形成完整的可访问 URL。做法：可在 JavaScript 中定义全局常量 BASE_URL = 'https://api.example.com'，在显示图片时使用 BASE_URL + imageUrl。更优方案：建议后端直接返回完整的图片 URL（含协议头），前端无需额外拼接处理。",
  39: "方法一：使用 <scroll-view> 组件的 lower-threshold 和 @scrolltolower 事件实现触底分页加载，避免一次性渲染大量数据。方法二：使用 v-for 渲染列表时，绑定唯一的 :key 属性，帮助 Vue 更高效地进行 DOM Diff 和复用。方法三（可选）：对于图片较多的列表，使用图片懒加载（如 uni-app 的 lazy-load 属性或第三方库），减少首屏加载压力。"
};

const fillQuestions = window.QUESTION_BANK.filter((question) => question.type === "fill");
const shortQuestions = window.QUESTION_BANK.filter((question) => question.type === "short");

if (fillQuestions.length !== 24 || shortQuestions.length !== 15) {
  throw new Error(`简答填空题数量不匹配：填空 ${fillQuestions.length} 道，简答 ${shortQuestions.length} 道`);
}

fillQuestions.forEach((question) => {
  const answers = PDF_CORRECT_FILL_ANSWERS[question.number];
  if (!answers) throw new Error(`PDF 中缺少填空第 ${question.number} 题的正确答案`);
  question.blankAnswers = answers.map((answer) => [answer]);
  question.explanation = PDF_FILL_EXPLANATIONS[question.number];
});

shortQuestions.forEach((question) => {
  const answer = PDF_CORRECT_SHORT_ANSWERS[question.number];
  if (!answer) throw new Error(`PDF 中缺少简答第 ${question.number} 题的正确答案`);
  question.modelAnswer = answer;
  question.explanation = answer;
});
