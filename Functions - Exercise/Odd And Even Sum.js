function oddAndEvenSum(num){
    let oddSum = 0;
    let evenSum = 0;

    let numberToString = convertingNumberToString(num);

    for(let i = 0; i < numberToString.length; i++){
        let currentChar = convertingStringToNumber(numberToString[i]);

        if(currentChar % 2 === 0 ){
            evenSum += currentChar;
        }else{
            oddSum += currentChar;
        }
    }

    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return result;

    function convertingNumberToString(num){
        return String(num);
    }

    function convertingStringToNumber(string){
        return Number(string);
    }

}
console.log(oddAndEvenSum(3495892137259234));
