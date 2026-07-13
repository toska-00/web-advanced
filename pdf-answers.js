// Strictly copied from the "正确答案" field in 选择+判断.pdf.
const PDF_CORRECT_ANSWERS = {"1":"B","2":"B","3":"C","4":"B","5":"B","6":"B","7":"C","8":"A","9":"B","10":"B","11":"B","12":"B","13":"B","14":"A","15":"A","16":"C","17":"B","18":"D","19":"A","20":"A","21":"B","22":"A","23":"A","24":"B","25":"B","26":"B","27":"B","28":"B","29":"C","30":"C","31":"B","32":"B","33":"B","34":"B","35":"C","36":"C","37":"B","38":"B","39":"B","40":"B","41":"A","42":"B","43":"B","44":"B","45":"A","46":"B","47":"B","48":"B","49":"A","50":"C","51":"C","52":"A","53":"A","54":"B","55":"A","56":"C","57":"B","58":"B","59":"C","60":"A","61":"C","62":"B","63":"A","64":"B","65":"C","66":"B","67":"C","68":"C","69":"A","70":"B","71":"A","72":"C","73":"B","74":"C","75":"B","76":"B","77":"B","78":"B","79":"A","80":"B","81":"B","82":"B","83":"C","84":"B","85":"A","86":"B","87":"B","88":"B","89":"C","90":"A","91":"B","92":"A","93":"A","94":"A","95":"B","96":"A","97":"B","98":"B","99":"B","100":"B","101":"B","102":"B","103":"A","104":"A","105":"B","106":"AB","107":"ABDE","108":"ABC","109":"ABC","110":"AD","111":"BC","112":"AC","113":"ABCD","114":"AB","115":"ABCDEFG","116":"ABC","117":"AB","118":"ABC","119":"ABCD","120":"ABCD","121":"ABD","122":"ACD","123":"ACD","124":"ABC","125":"ABC","126":"ABC","127":"AB","128":"AB","129":"ABD","130":"EF","131":"BC","132":"AC","133":"AD","134":"AC","135":"ABCE","136":"ACDE","137":"AC","138":"AC","139":"AB","140":"AB","141":"ACD","142":"ABC","143":"AB","144":"对","145":"对","146":"对","147":"错","148":"对","149":"对","150":"对","151":"对","152":"对","153":"错","154":"错","155":"对","156":"对","157":"对","158":"对","159":"错","160":"对","161":"对","162":"对","163":"错","164":"错","165":"对","166":"对","167":"对","168":"对","169":"对","170":"对","171":"对","172":"错","173":"错","174":"对","175":"错","176":"对","177":"对","178":"错"};

const PDF_EXPLANATION_OVERRIDES = {
  121: "条件编译的关键字包括 #ifdef、#ifndef 和 #endif，用于控制代码在特定平台上的编译。#else 也可以配合使用，但题目问的是控制代码在特定平台上编译的关键字，核心为 #ifdef、#ifndef 和 #endif。",
  144: "如果接口直接返回完整的图片访问地址（如以 http 或 https 开头的完整 URL），前端可以直接使用，无需拼接。是否需要拼接取决于接口返回的数据格式。",
  173: "await 关键字用于等待 Promise 对象完成。对于非 Promise 类型的值，它会被隐式转换为已兑现的 Promise 实例。",
  175: "onReachBottom 生命周期函数需要开发者在页面中手动定义才会生效，不是默认开启的。"
};

const objectiveQuestions = window.QUESTION_BANK.filter((question) => question.id.startsWith("xz-"));

if (objectiveQuestions.length !== Object.keys(PDF_CORRECT_ANSWERS).length) {
  throw new Error(`PDF 正确答案数量不匹配：题目 ${objectiveQuestions.length} 道，答案 ${Object.keys(PDF_CORRECT_ANSWERS).length} 个`);
}

objectiveQuestions.forEach((question) => {
  const answer = PDF_CORRECT_ANSWERS[question.number];
  if (!answer) throw new Error(`PDF 中缺少第 ${question.number} 题的正确答案`);
  question.answer = question.type === "judge" ? [answer] : answer.split("");
  if (PDF_EXPLANATION_OVERRIDES[question.number]) {
    question.explanation = PDF_EXPLANATION_OVERRIDES[question.number];
  }
});
