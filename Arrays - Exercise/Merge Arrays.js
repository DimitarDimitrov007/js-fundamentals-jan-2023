function mergeArrays(arrayOne,arrayTwo){
    let thirdArray = [];
    for(let i = 0; i < arrayOne.length; i++){
        let index = i;
        if(index % 2 === 0){
            thirdArray.push(Number(arrayOne[i]) + Number(arrayTwo[i]));
        }else{
            thirdArray.push(arrayOne[i] + arrayTwo[i]);
        }
    }
    
    let result = "";
    for(let j = 0; j < thirdArray.length; j++){
        result += thirdArray[j];
        if(j < thirdArray.length - 1){
            result+= " - ";
        }
    }
    console.log(result);
    //ИЛИ
    //console.log(thirdArray.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'],['22', '333', '5', '122', '44']);