const quiz = [
  {
    question: "What is the capital of Australia?",
    answer: "Canberra",
    options: ["Sydney", "Canberra", "Perth", "NSW"],
  },
  {
    question: "What is the capital of India?",
    answer: "New Delhi",
    options: ["New Delhi", "Jaipur", "Mohali", "Mumbai"],
  },
  {
    question: "What is the capital of Bangladesh?",
    answer: "Dhaka",
    options: ["Chittagong", "Canberra", "Dhaka", "NSW"],
  },
  {
    question: "What is the capital of Russia?",
    answer: "Moscow",
    options: ["Moscow", "St. Petersberg", "Paris", "Dublin"],
  },
];

let quesArr = [];

function getRandomNumber() {
  return Math.floor(Math.random() * quiz.length);
}

function setNum() {
  let ranNum = getRandomNumber();
  while (quesArr.includes(ranNum)) {
    ranNum = getRandomNumber();
  }
  quesArr.push(ranNum);
  randomqn(ranNum);

  if (quesArr.length === quiz.length) {
    clearInterval(fn);
  }
}
let fn = setInterval(setNum, 4000);

let container = document.querySelector(".container");

function randomqn(x) {
  for (let i = 0; i < quesArr.length; i++) {
    // let quesNum = quesArr[i];

    const parent = document.createElement("div");
    parent.classList.add("question");

    const question = document.createElement("p");
    question.innerText = quiz[x].question;
    parent.append(question);

    const optionDiv = document.createElement("div");
    optionDiv.classList.add("options");

    for (let j = 0; j < quiz[x].options.length; j++) {
      const option = document.createElement("p");
      option.classList.add("option");
      option.innerText = quiz[x].options[j];
      optionDiv.append(option);
    }

    parent.append(optionDiv);
    container.append(parent);
  }

  console.log(quesArr);
}
