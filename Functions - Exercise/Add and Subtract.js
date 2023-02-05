function addAndSubtract(numOne,numTwo,numThree){
    let result = subtractionOfTwoNumbers(sumOfTwoNumbers(numOne,numTwo),numThree);
    return result;

    function sumOfTwoNumbers(num1,num2){
        return num1 + num2;
    }

    function subtractionOfTwoNumbers(num1,num2){
        return num1 - num2;
    }
}
console.log(addAndSubtract(42,58,100));