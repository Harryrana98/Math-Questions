const Questions = [
  {
    q: "2+2-1",
    a: "3",
    options: ["4", "5", "3", "6"],
  },
  {
    q: "2+8-1",
    a: "9",
    options: ["7", "8", "9", "6"],
  },
  {
    q: "2*5-10",
    a: "0",
    options: ["10", "5", "0", "20"],
  },
  {
    q: "2(5+3)-5",
    a: "11",
    options: ["4", "10", "11", "6"],
  },
  {
    q: "4+3+6-7-1",
    a: "5",
    options: ["4", "5", "8", "6"],
  },
];

const startBtn = document.querySelector("#start");
const quizContainer = document.querySelector(".gameContainer");
const quesDiv = document.querySelector("#ques");
const optDiv = document.querySelector("#opt");
const timerDiv = document.querySelector("#timer");

let timer = 5;
const quesLength=0

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.style.display = "none";

  quesDiv.innerHTML = Questions[RandomQuiz()].q;
  // opt.innerHTML=Questions[RandomQuiz()].options
  const randomOptions = Questions[RandomQuiz()].options;

  OptionDisplay(randomOptions);

  timerDiv.innerHTML = timer;
  const counter = setInterval(() => {
   timerDiv.innerHTML=--timer
   if(timer===0){
    clearInterval(counter)
   }
  }, 1000);
}

function UpdateQuestions() {}

function OptionDisplay(optArr) {
  optArr.forEach((option) => {
    const optBtn = document.createElement("button");
    optBtn.className = "optBtn";
    optBtn.innerHTML = option;
    optDiv.append(optBtn);
  });
}

function RandomQuiz() {
  const random = Math.floor(Math.random() * Questions.length);
  return random;
}
