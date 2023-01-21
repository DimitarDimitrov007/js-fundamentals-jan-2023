function amazingNumbers(number){
    let numberText = String(number);
    let sum = 0;
    for(let i = 0; i < numberText.length; i++){
        let currentDigit = Number(numberText[i]);
        sum += currentDigit;
    }
    sum = String(sum);
    let isAmazing = true;
    for(let j = 0; j < sum.length; j++){
        let currentDigit2 = Number(sum[j]);
        if(currentDigit2 === 9){
            console.log(`${number} Amazing? True`);
           isAmazing = false;
           break;
        }
    }
    if(isAmazing){
    console.log(`${number} Amazing? False`);
    }
}
amazingNumbers(1233);
amazingNumbers(999);