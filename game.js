import { MAX_QUESTIONS, SCORE_POINTS, questions } from "./questions.js";

const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/register.html");
  }

  questionCounter++;
  progressText.innerHTML = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["answer" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice,
    addEventListener("click", (event) => {
      if (!acceptingAnswers) return;

      acceptingAnswers = false;
      const selectedChoice = event.target;
      const selectedAnswer = selectedChoice.dataset["number"];
      console.log(selectedAnswer);
      console.log(currentQuestion.correctAnswer);

      let classToApply =
        selectedAnswer == currentQuestion.correctAnswer
          ? "correct"
          : "incorrect";

      if (classToApply === "correct") {
        incrementScore(SCORE_POINTS);
      }

      selectedChoice.parentElement.classList.add(classToApply);

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000);
    });
});

const incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

const startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

startGame();
