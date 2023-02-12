function searchForANumber(arrOne,arrTwo){
    let count = 0;
    let result = arrOne.slice(0,arrTwo[0])
    result.splice(0,arrTwo[1]);

    for(el of result){
        if(el === arrTwo[2]){
            count++;
        }
    }
    
    console.log(`Number ${arrTwo[2]} occurs ${count} times.`)
}
searchForANumber([5, 2, 3, 4, 1, 6],[5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7],[3, 1, 5]);