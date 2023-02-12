function distinctArray(array){
    let newArray = [];
    for(number of array){
        if(!newArray.includes(number)){
            newArray.push(number);
        }
    }
    console.log(newArray.join(" "));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);