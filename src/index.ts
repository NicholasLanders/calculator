const numbers = document.querySelectorAll(".number");
const effects = document.querySelectorAll(".effect");
const display = document.getElementById("display") as HTMLInputElement;
const period = document.getElementById("period");
const C = document.getElementById("C");
const equals = document.getElementById("equals");
const plusOrMinus = document.getElementById("plusOrMinus");

let curTotal: number = 0;
let firstStr: string = "";
let effectClicked: string = "";
let isFirstDigitSecondNum: boolean = false;

equals?.addEventListener("click", () => {
  curTotal = compute(display.value);
  removeEffectClicked();
  display.value = String(curTotal);
  firstStr = "";
});

period?.addEventListener("click", () => {
  if (!display.value.includes(".")) {
    display.value += period?.innerHTML;
  }
});

plusOrMinus?.addEventListener("click", () => {
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
    if (display.value === "0" || (isFirstDigitSecondNum === true)) {
      display.value = `${el.innerHTML}`;
      isFirstDigitSecondNum = false;
    } else {
      display.value += `${el.innerHTML}`;
    }
  });
});

effects.forEach((el) => {
  el.addEventListener("click", () => {
    removeEffectClicked();
    el.classList.add("clicked");
    effectClicked = el.innerHTML;
    firstStr = display.value;
    isFirstDigitSecondNum = true;
  });
});

function removeEffectClicked() {
  effects.forEach((el) => {
    el.classList.remove("clicked");
    effectClicked = "";
  });
}

function compute(secondStr: string) {
  let firstNum: number = Number(firstStr);
  let secondNum: number = Number(secondStr);

  switch (effectClicked) {
    case "&divide":
      return firstNum / secondNum;
    case "x":
      return firstNum * secondNum;
    case "-":
      return firstNum - secondNum;
    case "+":
      return firstNum + secondNum;
    default:
      return 0;
  }
}
