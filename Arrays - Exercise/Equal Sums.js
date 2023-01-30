function equalSums(array) {
    let index = "no";
    let thereIs = false;
    for (let i = 0; i < array.length; i++) {
        let previousNumbersSum = 0;
        let nextNumbersSum = 0;

        for (let j = 0; j < i; j++) {
            let previousNumber = array[j];
            previousNumbersSum += previousNumber;
        }

        for (let k = i + 1; k < array.length; k++) {
            let nextNumber = array[k];
            nextNumbersSum += nextNumber;
        }

        if (previousNumbersSum === nextNumbersSum) {
            index = i;
            thereIs = true;
            break;
        }

    }
    if(thereIs){
        console.log(index);
    }else{
        console.log(index);
    }

}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);