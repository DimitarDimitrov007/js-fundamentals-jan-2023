function sorting(array){
    let sortedArray = array.sort((a,b) => b - a)
    let copy = sortedArray.slice(0);

    let result = [];
    for(let  i = 0; i < sortedArray.length / 2; i ++){
        result.push(copy.shift());
        result.push(copy.pop());

    }

    console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);