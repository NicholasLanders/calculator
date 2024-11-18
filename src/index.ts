const numbers = document.querySelectorAll(".number");
const effects = document.querySelectorAll(".effect");
const display = document.getElementById("display") as HTMLInputElement;
const period = document.getElementById("period");
const plusOrMinus = document.getElementById("plusOrMinus");

let curTotal: number = 0;

period?.addEventListener("click", () => {
  if (!display.value.includes(".")) {
    display.value += period?.innerHTML;
  }
});

numbers.forEach((el) => {
  el.addEventListener("click", () => {
    display.value = `${el.innerHTML}`;
  });
});

effects.forEach((el) => {
  el.addEventListener("click", () => {
    removeEffectClicked();
    el.classList.add("clicked");
  });
});

function removeEffectClicked() {
  effects.forEach((el) => {
    el.classList.remove("clicked");
  });
}
