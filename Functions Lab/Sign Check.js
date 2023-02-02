function signCheck(numOne, numTwo, numThree){
    let outcome = "";
    if(numOne > 0 && numTwo > 0 && numThree > 0){
        outcome = "Positive";
    }else if( numOne < 0 && numTwo < 0 && numThree < 0){
        outcome = "Negative";
    }else if(numOne > 0 && numTwo > 0 && numThree < 0){
        outcome = "Negative";
    }else if(numOne > 0 && numTwo < 0 && numThree > 0){
        outcome = "Negative";
    }else if(numOne > 0 && numTwo < 0 && numThree < 0){
        outcome = "Positive";
    }else if(numOne < 0 && numTwo < 0 && numThree > 0){
        outcome = "Positive";
    }else if(numOne < 0 && numTwo > 0 && numThree > 0){
        outcome = "Negative";
    }else if(numOne < 0 && numTwo > 0 && numThree < 0){
        outcome = "Positive";
    }

    return outcome;

}
console.log(signCheck(-5,
    1,
    1
   ));