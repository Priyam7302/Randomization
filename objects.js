// obj = {
//   name: "priyam",
//   age: 23,
//   course: "B.Tech",
// };
// for (let i in obj) {
//   document.writeln(i, ":", obj[i] + "<br>");
// }

// const salaries = {
//   person1: 12000,
//   person2: 24500,
//   person3: 13350,
//   person4: 27000,
// };

// let sum = 0;
// for (let i in salaries) {
//   sum += salaries[i];
// }
// document.writeln(sum);

// document.writeln(Object.values(salaries));
// let sum = 0;
// for (let i of Object.values(salaries)) {
//   sum = sum + i;
// }
// document.writeln(sum);

// const people = {
//   person1: "vada",
//   person2: "diva",
//   person3: "simmi",
//   person4: "dhruv",
//   person5: "yash",
//   person6: "ram",
//   person: "manish",
// };

// for (let [i, j] of Object.entries(people)) {
//   //   document.writeln(j);
//   res = j.split("").reverse().join("");
//   document.writeln(i, ":", res, "<br>");
// }

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

let container = document.querySelector(".container");

for (let i = 0; i < quiz.length; i++) {
  const parent = document.createElement("div");
  parent.classList.add("question");

  const question = document.createElement("p");
  question.innerText = quiz[i].question;
  parent.append(question);

  const optionDiv = document.createElement("div");
  optionDiv.classList.add("options");

  for (let j = 0; j < quiz[i].options.length; j++) {
    const option = document.createElement("p");
    option.classList.add("option");
    option.innerText = quiz[i].options[j];
    optionDiv.append(option);
  }

  parent.append(optionDiv);
  container.append(parent);
}
