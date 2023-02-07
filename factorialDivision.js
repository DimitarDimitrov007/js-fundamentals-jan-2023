function factorialDivision(num1,num2){
    let factorialOne = factorialOfNumber(num1);
    let factorialTwo = factorialOfNumber(num2);
    return (factorialOne / factorialTwo).toFixed(2);

    function factorialOfNumber(number){
        let sum = number
        for(let i = number - 1 ; i >= 1; i--){
             sum = sum * i;

        }
        return sum;
    }

}
console.log(factorialDivision(6,2));

