function condenseArrayToNumber(numbers) {
    while (numbers.length > 1) {
        condensed = [];
        for (let i = 0; i < numbers.length - 1; i++) {
            let firstNum = Number(numbers[i]);
            let secondNum = Number(numbers[i + 1]);
            condensed.push(firstNum + secondNum);
        }
        numbers = condensed;
    }

    console.log(numbers[0]);

}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);