function sumOfOddNum(count){
    let oddNum = 1;
    let sum = 0;
    for(let i = 1; i <= count; i++){
        console.log(oddNum);
        sum += oddNum;
        oddNum += 2;
        
       
        
    }
    console.log(`Sum: ${sum}`);

}
sumOfOddNum(5);
sumOfOddNum(3);