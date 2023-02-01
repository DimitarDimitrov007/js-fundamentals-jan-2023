function nonDecreasingSubset(array){
    let biggestNumber = 0;
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        let currentNumber = array[i];
        if(currentNumber >= biggestNumber){
            biggestNumber = currentNumber;
            newArray.push(biggestNumber);
        }
    }

    console.log(newArray.join(" "));

}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);