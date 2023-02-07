function loadingBar(number) {
    /* 1. create a variable with the number of "." in the array
    2.create another variable which is going to store "%"
    3.divide the given number ( number % 10) with 10 to receive "%" count.
    4.create if/else check which returns certain text.
    */
    let numberOfPercent = percentCount(number);
    let numberOfDots = dotsCount();
    let result = text(numberOfPercent);
    return result;

    function text(percentCount) {
        if (percentCount < 10) {
            return `${number}% [${"%".repeat(numberOfPercent)}${".".repeat(numberOfDots)}]
Still loading...`;
        }
        return `${number}% Complete!
[${"%".repeat(numberOfPercent)}${".".repeat(numberOfDots)}]`;
    }

    function percentCount(number) {
        return number / 10;
    }

    function dotsCount() {
        let dots = 10;
        return dots - percentCount(number);
    }
}
console.log(loadingBar(100));