function triangleOfNumbers(n){
    for(let row = 1; row <= n; row++){
        let buff = "";
        for(let col = 1; col <= row; col++){
            buff += row + " ";
        }
        console.log(buff);
    }

}
triangleOfNumbers(3);