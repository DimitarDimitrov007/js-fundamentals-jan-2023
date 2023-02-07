function perfectNumber(number){
    /* 1. for cycle to find  the number's divisors
    2. add each of them to a variable called sumOfDivisors
    3.check is the number is equal to sumOfDivisors
    */
   let sumOfDivisors = findingSumOfDivisors(number);
   let result = isPerfect(number,sumOfDivisors);
   return result;

    function isPerfect(number,sum){
        if(number === sum){
            return "We have a perfect number!";
        }

        return "It's not so perfect.";
    }

    function findingSumOfDivisors(number){
        let sum = 0;
        for(let i = 1; i < number; i++){
            let divisor = Number(i);
            if(number % divisor === 0){
                sum += i;
            }
        }
        return sum;
    }
}
console.log(perfectNumber(1236498));