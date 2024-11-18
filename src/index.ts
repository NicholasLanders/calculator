const numbers = document.querySelectorAll(".number");
const effects = document.querySelectorAll(".effect");
const display = document.getElementById("display") as HTMLInputElement;
const period = document.getElementById("period");
const C = document.getElementById("C");
const plusOrMinus = document.getElementById("plusOrMinus");

let curTotal: number = 0;
let effectClicked: string = "";

period?.addEventListener("click", () => {
  if (!display.value.includes(".")) {
    removeEffectClicked();
    display.value += period?.innerHTML;
  }
});

plusOrMinus?.addEventListener("click", () => {
  removeEffectClicked();
  if (display.value.includes("-")) {
    display.value = display.value.replace("-", "");
    display.value = "+" + display.value;
  } else if (display.value.includes("+")) {
    display.value = display.value.replace("+", "");
    display.value = "-" + display.value;
  } else {
    display.value = "-" + display.value;
  }
});

C?.addEventListener("click", () => {
  removeEffectClicked();
  display.value = "0";
  curTotal = 0;
});

numbers.forEach((el) => {
  el.addEventListener("click", () => {
    let curVal: string = display.value;

    removeEffectClicked();
    display.value = `${el.innerHTML}`;
    if ((effectClicked = "")) {
      return;
    }
    switch (effectClicked) {
      case "&divide":
        divide();
        break;
      case "x":
        multiply();
        break;
      case "-":
        subtract();
        break;
      case "+":
        add();
        break;
    }
  });
});

effects.forEach((el) => {
  el.addEventListener("click", () => {
    removeEffectClicked();
    el.classList.add("clicked");
    effectClicked = el.innerHTML;
  });
});

function removeEffectClicked() {
  effects.forEach((el) => {
    el.classList.remove("clicked");
  });
}

function divide() {}

function multiply() {}

function subtract() {}

function add() {}
