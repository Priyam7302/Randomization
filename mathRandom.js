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
// let randomNum = Math.floor(Math.random() * 4 + 1);

function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * quiz.length);
  if (quesArr.includes(randomNum)) {
    return getRandomNumber();
  } else {
    quesArr.push(randomNum);
    return randomNum;
  }
}

// console.log(randomNum);

let container = document.querySelector(".container");

for (let i = 0; i < 4; i++) {
  let quesNum = getRandomNumber();
  const parent = document.createElement("div");
  parent.classList.add("question");
  console.log(quesNum);
  const question = document.createElement("p");
  question.innerText = quiz[quesNum].question;
  parent.append(question);

  const optionDiv = document.createElement("div");
  optionDiv.classList.add("options");

  for (let j = 0; j < quiz[i].options.length; j++) {
    const option = document.createElement("p");
    option.classList.add("option");
    option.innerText = quiz[quesNum].options[j];
    optionDiv.append(option);
  }

  parent.append(optionDiv);
  container.append(parent);
}
