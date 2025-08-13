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
    imgUrl: "dice_2.png",
    answer: "Moscow",
    options: ["Moscow", "St. Petersberg", "Paris", "Dublin"],
  },
];

let quesArr = [];

function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * quiz.length);
  if (quesArr.includes(randomNum)) {
    return getRandomNumber();
  } else {
    quesArr.push(randomNum);
    return randomNum;
  }
}

let container = document.querySelector(".container");
let cnt = 0;
fn();
let timing = setInterval(() => {
  cnt++;
  fn();
}, 5000);

function fn() {
  let quesNum = getRandomNumber();
  const parent = document.querySelector(".question");

  console.log(quesNum);

  const question = document.querySelector(".qn-para");
  question.innerText = quiz[quesNum].question;

  const imgQn = document.querySelector("img");
  imgQn.src = "";
  if (
    quiz[quesNum].imgUrl &&
    (quiz[quesNum].imgUrl.toLowerCase().endsWith(".jpg") ||
      quiz[quesNum].imgUrl.toLowerCase().endsWith(".png") ||
      quiz[quesNum].imgUrl.toLowerCase().endsWith(".gif"))
  ) {
    imgQn.src = quiz[quesNum].imgUrl;
  }

  const optionDiv = document.querySelector("div");
  const options = document.querySelectorAll(".option");
  for (let j = 0; j < 4; j++) {
    options[j].innerText = quiz[quesNum].options[j];
  }

  if (cnt == 4) {
    console.log("priyam");
    clearInterval(timing);
  }
}
