function signCheck(numOne, numTwo, numThree) {
    let sign = "Positive";
    let isNumberOneNegative = isNumberNegative(numOne);
    sign = checkIfSignShouldChange(sign, isNumberOneNegative);
    let isNumberTwoNegative = isNumberNegative(numTwo);
    sign = checkIfSignShouldChange(sign, isNumberTwoNegative);
    let isNumberThreeNegative = isNumberNegative(numThree);
    sign = checkIfSignShouldChange(sign, isNumberThreeNegative);

    return sign;

    function checkIfSignShouldChange(sign, shouldChange) {
        if (shouldChange === false) {
            return sign;
        } else {
            if (sign === "Positive") {
                return "Negative";
            } else {
                return "Positive";
            }
        }
    }

    function isNumberNegative(num) {
        let result = num < 0;
        return result;
    }
}
console.log(signCheck(-5,1,1));
