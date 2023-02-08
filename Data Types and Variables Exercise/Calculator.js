function calculator(numberOne, operator, numberTwo) {
    result = 0;
    switch (operator) {
        case "+": result = numberOne + numberTwo;
            break;
        case "-": result = numberOne - numberTwo;
            break;
        case "/": result = numberOne / numberTwo;
            break;
        case "*": result = numberOne * numberTwo;
            break;
    }

    return result.toFixed(2);
}
console.log(calculator(25.5,
    '-',
    3
    ));