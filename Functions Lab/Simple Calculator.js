function simpleCalculator(numberOne, numberTwo, operator) {
    let result = 0;
    switch (operator) {
        case "multiply":
            result += multiply(numberOne, numberTwo);
            break;
        case "divide":
            result += divide(numberOne, numberTwo);
            break;
        case "add":
            result += add(numberOne, numberTwo);
            break;
        case "subtract":
            result += subtract(numberOne, numberTwo)
            break;
    }

    return result;

    function multiply(numberOne, numberTwo) {
        return numberOne * numberTwo;
    }

    function divide(numberOne, numberTwo) {
        return numberOne / numberTwo;
    }

    function add(numberOne, numberTwo) {
        return numberOne + numberTwo;
    }

    function subtract(numberOne, numberTwo) {
        return numberOne - numberTwo;
    }
}

let finalResult = simpleCalculator(5, 5, "multiply");
console.log(finalResult);
