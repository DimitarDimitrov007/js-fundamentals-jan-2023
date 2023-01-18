function division(number) {
    let output = 0;
    if (number % 10 === 0) {
        output = 10;
    }  else if (number % 7 === 0) {
        output = 7;
    } else if (number % 6 === 0) {
        output = 6;
    } else if (number % 3 === 0) {
        output = 3;
    } else if (number % 2 === 0) {
        output = 2;
    }
    if(output === 0){
        console.log("Not divisible");
    }else{
       console.log(`The number is divisible by ${output}`);
    }

}
division(30);
division(15);
division(12);
division(1643);