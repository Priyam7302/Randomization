let btn = document.querySelectorAll(".btn");

for (let i = 0; i < btn.length; i++) btn[i].addEventListener("click", printFn);

function printFn(e) {
  document.writeln(e.target.innerText);
}
