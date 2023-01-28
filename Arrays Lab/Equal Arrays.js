function equalArrays(arrayOne,arrayTwo){
    areIdentical = true;
    let sum = 0;
    for(let i = 0; i < arrayOne.length; i++){
        if(arrayOne[i] !== arrayTwo[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areIdentical = false;
            break;
        }
        sum += Number(arrayOne[i]);
    }
    if(areIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);