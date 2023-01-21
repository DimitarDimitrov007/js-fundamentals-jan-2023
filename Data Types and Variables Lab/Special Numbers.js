function specialNumbers(n){
    for(let i = 1;i <= n;i++){
        let currentNumber = Number(i);
        currentNumber = String(currentNumber);
        let sum = 0;
        for(let j = 0; j < currentNumber.length;j++){
            let currentDigit = Number(currentNumber[j]);
            sum += currentDigit;
        }
       let isSpecial = (sum === 5 || sum === 7 || sum === 11);
       let answer = isSpecial ? "True" : "False";
       console.log(`${i} -> ${answer}`);
       
    }
 
}
specialNumbers(15);
specialNumbers(20)