function printingSmallestOfThreeNumbers(numOne,numTwo,numThree){
    let result = smallestOfTwoNumbers(smallestOfTwoNumbers(numOne,numTwo),numThree);
    return result;

    function smallestOfTwoNumbers(num1,num2){
        if(num1 < num2){
            return num1;
        }

        return num2;

    }
}
console.log(printingSmallestOfThreeNumbers(2,5,3));

console.log("----------------------------------");

function printingSmallestOfThreeNumbers(numOne,numTwo,numThree){
  let result = Math.min(numOne,numTwo,numThree);
  return result;
}
console.log(printingSmallestOfThreeNumbers(2,5,3));
