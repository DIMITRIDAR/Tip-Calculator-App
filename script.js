const billInput = document.getElementById("bill");
const tipInputs = Array.from(document.getElementsByClassName("tip-hover"));
const peopleInput = document.getElementById("people");
const resultTip = document.getElementById("result-tip");
const resultTotal = document.getElementById("result-total");
const resetButton = document.getElementById("reset");
const customTipInput = document.getElementById("custom-tip");

let billValue = 0;
let tipValue = 0;
let peopleValue = 0;
billInput.addEventListener("input", (event) => {
  billValue = Number(event.target.value);
  calculation();
});
tipInputs.forEach((button) =>
  button.addEventListener("click", (event) => {
    tipValue = parseInt(event.target.innerText);
    calculation();
  })
);

peopleInput.addEventListener("input", (event) => {
  peopleValue = Number(event.target.value);
  calculation();
});

customTipInput.addEventListener("input", (event) => {
  tipValue = parseIn(event.target.value);
  calculation();
});
