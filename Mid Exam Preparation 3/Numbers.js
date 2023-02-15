function numbers(string){
    let numbers = string.split(" ").map(x => Number(x));
    let sum = 0;
    let result = [];
    
    for(number of numbers){
        sum += number;
    }

    sum = sum / numbers.length;

    for(let  i = 0; i < numbers.length; i++){
        let currentNumber = numbers[i];

        if(currentNumber > sum){
            result.push(currentNumber);
        }

    }

    if(result.length === 0){
        console.log("No");
    }else{
        result.sort((a,b) => b - a);
        let finalResult = result.splice(0,5);
        console.log(finalResult.join(" "));
    }
}
numbers('-1 -2 -3 -4 -5 -6');
