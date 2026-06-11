import { SAP_QUIZ_QUESTIONS } from "./data.js";
// Normalize mcq / msq types
const questions = SAP_QUIZ_QUESTIONS.map((q, i) => ({
  ...q,
  id: i,
  type: q.type === "mcq" ? "single" : q.type === "msq" ? "multiple" : q.type
}));
// -------------------------------------------
// GROUPING FUNCTION (splits lists into size 20)
// -------------------------------------------
function chunkArray(arr, size = 20) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
// -------------------------------------------
// TOPIC-BASED GROUPING
// -------------------------------------------
const TOPIC_GROUPS = {}; // {ux400: [chunks], cloud: [chunks], all: [chunks]}
// group by topic
questions.forEach(q => {
  if (!TOPIC_GROUPS[q.topic]) TOPIC_GROUPS[q.topic] = [];
  TOPIC_GROUPS[q.topic].push(q);
});
// convert each topic into chunk groups
Object.keys(TOPIC_GROUPS).forEach(topic => {
  TOPIC_GROUPS[topic] = chunkArray(TOPIC_GROUPS[topic], 20);
});
// -------------------------------------------
// "ALL" TOPIC -> grouping based on full dataset
// -------------------------------------------
TOPIC_GROUPS["all"] = chunkArray(questions, 20);
// -------------------------------------------
// GLOBAL STATE
// -------------------------------------------
let currentTopic = "all";
let currentGroupIndex = 0;
let filteredQuestions = [...TOPIC_GROUPS["all"][0]];
let userAnswers = {};
// -------------------------------------------
// DOM
// -------------------------------------------
const topicFilter = document.getElementById("topicFilter");
const groupSelect = document.getElementById("groupSelect");
const quizList = document.getElementById("quizList");
// -------------------------------------------
// INIT
// -------------------------------------------
init();
function init() {
  renderTopicDropdown();
  renderGroupDropdown();
  renderQuestions();
  updateMetrics();
  attachEvents();
}
// -------------------------------------------
// TOPIC DROPDOWN
// -------------------------------------------
function renderTopicDropdown() {
  const topics = ["all", ...Object.keys(TOPIC_GROUPS).filter(t => t !== "all")];
  topicFilter.innerHTML = topics
    .map(t => `<option value="${t}">${t}</option>`)
    .join("");
  topicFilter.value = currentTopic;
}
// -------------------------------------------
// GROUP DROPDOWN (changes with topic)
// -------------------------------------------
function renderGroupDropdown() {
  const groups = TOPIC_GROUPS[currentTopic];
  groupSelect.innerHTML = groups
    .map((_, i) => `<option value="${i}">Group ${i + 1}</option>`)
    .join("");
  groupSelect.value = currentGroupIndex;
}
// -------------------------------------------
// LOAD GROUP
// -------------------------------------------
function loadGroup() {
  filteredQuestions = [...TOPIC_GROUPS[currentTopic][currentGroupIndex]];
  resetMetrics();   // <-- clear score & percent
  clearMarks();     // <-- remove colors & explanations
  renderQuestions();
  updateMetrics();
}
// -------------------------------------------
// EVENTS
// -------------------------------------------
function attachEvents() {
  topicFilter.onchange = () => {
  currentTopic = topicFilter.value;
  currentGroupIndex = 0;
  renderGroupDropdown();
  loadGroup();   // <-- clears everything
};
  groupSelect.onchange = () => {
    currentGroupIndex = Number(groupSelect.value);
    loadGroup();
  };
  document.getElementById("shuffleQuestionsBtn").onclick = () => {
    filteredQuestions = shuffle([...filteredQuestions]);
    renderQuestions();
  };
  document.getElementById("shuffleAnswersBtn").onclick = () => {
    filteredQuestions = filteredQuestions.map(q => ({
      ...q,
      options: shuffle([...q.options])
    }));
    renderQuestions();
  };
  document.getElementById("submitBtn").onclick = gradeQuiz;
}
// -------------------------------------------
// RENDER QUESTIONS
// -------------------------------------------
function renderQuestions() {
  quizList.innerHTML = "";
  filteredQuestions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question-block";
    div.dataset.qid = q.id;
    div.innerHTML = `
      <h3>${index + 1}. ${q.question}</h3>
      <div class="options">${renderOptions(q)}</div>
      <div class="explanation hidden" id="exp_${q.id}">${q.explanation}</div>
    `;
    quizList.appendChild(div);
  });
  quizList.onchange = handleAnswer;
}
function renderOptions(q) {
  return q.options
    .map(
      (opt, idx) => `
      <label class="option">
        <input type="${q.type === "single" ? "radio" : "checkbox"}"
               name="q_${q.id}"
               value="${idx}"
               ${userAnswers[q.id]?.includes(idx) ? "checked" : ""} />
        ${opt}
      </label>
    `
    )
    .join("");
}
// -------------------------------------------
// HANDLE ANSWER
// -------------------------------------------
function handleAnswer(e) {
  if (!e.target.matches("input")) return;
  const qid = Number(e.target.name.split("_")[1]);
  const val = Number(e.target.value);
  const q = questions.find(x => x.id === qid);
  if (q.type === "single") {
    userAnswers[qid] = [val];
  } else {
    let arr = userAnswers[qid] || [];
    arr = arr.includes(val)
      ? arr.filter(x => x !== val)
      : [...arr, val];
    userAnswers[qid] = arr;
  }
  updateMetrics();
}
// -------------------------------------------
// METRICS
// -------------------------------------------
function updateMetrics() {
  document.getElementById("answeredCount").textContent =
    Object.keys(userAnswers).length;
  document.getElementById("showingCount").textContent =
    filteredQuestions.length;
}


function resetMetrics() {
  userAnswers = {};
  document.getElementById("answeredCount").textContent = "0";
  document.getElementById("showingCount").textContent = filteredQuestions.length;
  document.getElementById("scoreCount").textContent = "--";
  document.getElementById("percentCount").textContent = "--";
}

function clearMarks() {
  document.querySelectorAll(".question-block").forEach(block => {
    block.classList.remove("correct", "incorrect");
  });
  document.querySelectorAll(".explanation").forEach(exp => {
    exp.classList.add("hidden");
  });
}
// -------------------------------------------
// GRADE QUIZ
// -------------------------------------------
function gradeQuiz() {
  let correctCount = 0;
  filteredQuestions.forEach(q => {
    const user = userAnswers[q.id] || [];
    const correct = arraysEqual(user, q.correct);
    if (correct) correctCount++;
    const block = [...document.querySelectorAll(".question-block")].find(
      b => Number(b.dataset.qid) === q.id
    );
    block.classList.remove("correct", "incorrect");
    block.classList.add(correct ? "correct" : "incorrect");
    // show explanation
    document.getElementById(`exp_${q.id}`).classList.remove("hidden");
  });
  // Score calculation
  const total = filteredQuestions.length;
  const percent = ((correctCount / total) * 100).toFixed(2);
  // update UI
  document.getElementById("scoreCount").textContent = `${correctCount} / ${total}`;
  document.getElementById("percentCount").textContent = `${percent}%`;
}
// -------------------------------------------
// UTILS
// -------------------------------------------
function arraysEqual(a, b) {
  return [...a].sort().join(",") === [...b].sort().join(",");
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}