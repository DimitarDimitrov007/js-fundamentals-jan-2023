function evenAndOddSubtraction(array){
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < array.length; i++){
        let currentNum = Number(array[i]);
        if(currentNum % 2 === 0){
            evenSum += currentNum;
        }else{
            oddSum += currentNum;
        }
    }
    console.log(evenSum - oddSum);

}
evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);

console.log("--------------------------------------------------------");


function evenAndOddSubtraction1(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        let currentNum = Number(array[i]);

        if(currentNum % 2 === 0){
            sum += currentNum;
        }else{
            sum -= currentNum;
        }
    }
    console.log(sum);
    
}
evenAndOddSubtraction1([1,2,3,4,5,6]);
evenAndOddSubtraction1([3,5,7,9]);
evenAndOddSubtraction1([2,4,6,8,10]);
