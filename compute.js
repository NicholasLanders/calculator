export function compute(firstStr, secondStr, effectClicked) {
    let firstNum = Number(firstStr);
    let secondNum = Number(secondStr);
    switch (effectClicked) {
        case "÷":
            if (secondNum === 0)
                return "NaN";
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
