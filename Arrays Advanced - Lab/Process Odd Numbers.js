function processOddNumbers(numbers) {
    let result = numbers.filter((x, i) => i % 2 !== 0)
    .map((x) => x *2)
    .reverse();
    console.log(result);  
}
processOddNumbers([10, 15, 20, 25]);