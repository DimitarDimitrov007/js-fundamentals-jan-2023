function firstAndLastKNumbers2(numbers) {
    let k = numbers.shift();
    let firstElements = numbers.slice(0,k);
    let lastElements = numbers.slice(numbers.length - k);
    console.log(firstElements.join(" "));
    console.log(lastElements.join(" "));
}
firstAndLastKNumbers2([2, 7, 8, 9]);
firstAndLastKNumbers2([3, 6, 7, 8, 9]);