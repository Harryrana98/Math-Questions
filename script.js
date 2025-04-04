const Questions = [
  {
    q: "2+2-1",
    a: 3,
    options: [4, 5, 3, 6],
  },
  {
    q: "2+8-1",
    a: 9,
    options: [7, 8, 9, 6],
  },
  {
    q: "2*5-10",
    a: 0,
    options: [10, 5, 0, 20],
  },
  {
    q: "2(5+3)-5",
    a: 11,
    options: [4, 10, 11, 6],
  },
  {
    q: "4+3+6-7-1",
    a: 5,
    options: [4, 5, 8, 6],
  },
  {
    q: "What is the capital of China?",
    a: "Beijing",
    options: ["New Delhi", "Beijing", "Kathmandu", "Islamabad"],
  },
  {
    q: "Which of the following is NOT a neighbour of India?",
    a: "Australia",
    options: ["Pakistan", "China", "Australia", "Bhutan"],
  },
];

const startBtn = document.querySelector("#start");
const quizContainer = document.querySelector(".gameContainer");
const quesDiv = document.querySelector("#ques");
const optDiv = document.querySelector("#opt");
const timerDiv = document.querySelector("#timer");

let timer = 5;
let quesLength = 0;
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.style.display = "none";

  UpdateQuiz();

  // DisplayQuiz(randomOptions);

  timerDiv.innerHTML = timer;
  const counter = setInterval(() => {
    if (timer === 0) {
      // clearInterval(counter)
      quesLength++;
      UpdateQuiz();
      timer = 5;
      timerDiv.innerText = timer;
    }
    else{
      timerDiv.innerHTML = --timer;
      
    }
  }, 1000);
}

function UpdateQuiz() {
  optDiv.innerText=""
  quesDiv.innerText = Questions[quesLength].q;
  const optionArr = Questions[quesLength].options;
  optionArr.forEach((opt) => {
    const optBtn = document.createElement("button");
    optBtn.innerHTML = opt;
    optDiv.append(optBtn);
  });
}


function RandomQuiz() {
  const random = Math.floor(Math.random() * Questions.length);
  return random;
}
