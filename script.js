const questions = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: 0
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    answer: 0
  },
  {
    question: "What language is used for web apps?",
    options: ["Python", "JavaScript", "C++"],
    answer: 1
  },
  {
    question: "Which tag is used to include JavaScript in HTML?",
    options: ["<script>", "<js>", "<javascript>"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  timeLeft = 30;
  scoreContainer.classList.add("hidden");
  document.getElementById("question-container").classList.remove("hidden");
  showQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timerEl.textContent = `Time: ${timeLeft}`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time: ${timeLeft}`;
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.textContent = option;
    btn.onclick = () => selectOption(index);
    optionsEl.appendChild(btn);
  });
}

function selectOption(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById("question-container").classList.add("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
  scoreContainer.classList.remove("hidden");
}

startQuiz();
