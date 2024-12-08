const numbers = document.querySelectorAll(".number");
const effects = document.querySelectorAll(".effect");
const display = document.getElementById("display") as HTMLInputElement;
const period = document.getElementById("period");
const C = document.getElementById("C");
const equals = document.getElementById("equals");
const plusOrMinus = document.getElementById("plusOrMinus");

let curTotal: string = "0";
let firstStr: string = "";
let secondStr: string = "";
let effectClicked: string = "";
let isFirstDigitOfSecondNum: boolean = false;
let equalPressed: boolean = false;

equals?.addEventListener("click", () => {
  if (equalPressed === true) {
    firstStr = display.value;
  } else {
    secondStr = display.value;
  }
  curTotal = compute();
  display.value = curTotal;

  equalPressed = true;
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
  effectClicked = "";
  display.value = "0";
  curTotal = "0";
});

numbers.forEach((el) => {
  el.addEventListener("click", () => {
    if (
      display.value === "0" ||
      isFirstDigitOfSecondNum === true ||
      equalPressed === true
    ) {
      display.value = `${el.innerHTML}`;
      isFirstDigitOfSecondNum = false;
      equalPressed = false;
      removeEffectClicked();
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
    isFirstDigitOfSecondNum = true;
  });
});

function removeEffectClicked() {
  effects.forEach((el) => {
    el.classList.remove("clicked");
  });
}

function removeNumbers() {
  firstStr = "";
  secondStr = "";
}

function compute() {
  let firstNum: number = Number(firstStr);
  let secondNum: number = Number(secondStr);

  switch (effectClicked) {
    case "÷":
      if (secondNum === 0) return "NaN";
      return String(firstNum / secondNum);
    case "x":
      return String(firstNum * secondNum);
    case "-":
      return String(firstNum - secondNum);
    case "+":
      return String(firstNum + secondNum);
    default:
      return "0";
  }
}
