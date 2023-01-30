function addAndSubtract(array){
    let newArray = [];
    let sumBeforeChange = 0;
    let sumAfterChange = 0;
    for(let i = 0; i < array.length; i++){
        let currentNum = Number(array[i]);
        sumBeforeChange += currentNum;
        if(currentNum % 2 === 0){
            currentNum += i;
        }else{
            currentNum -= i;
        }
        newArray.push(currentNum);
        sumAfterChange += currentNum;
    }
    console.log(newArray);
    console.log(sumBeforeChange);
    console.log(sumAfterChange);

}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);