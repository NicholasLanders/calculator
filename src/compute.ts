export function compute(
  firstStr: string,
  secondStr: string,
  effectClicked: string
): string {
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
