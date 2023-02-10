function negativeOrPositiveNumbers(array){
    let newArray = [];
    for(let num of array){
        if(num < 0){
            newArray.unshift(num);
        }else{
            newArray.push(num);
        }
    }

    return newArray.join("\n");
}
console.log(negativeOrPositiveNumbers(['7', '-2', '8', '9']));