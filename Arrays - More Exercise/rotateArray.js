function rotateArray(array){
    let lastElement = Number(array[array.length - 1]);
    array.pop(lastElement);
    for(let i = 0; i < lastElement; i++ ){
        let newArray = [];
        let constElement = array[array.length - 1];
        newArray.push(constElement);
        for(let j = 0; j < array.length - 1; j ++ ){
            let currentElement = array[j];
            newArray.push(currentElement);
        }
        array = newArray;
    }
    console.log(array.join(" "));
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

console.log("----------------------------------------------------------");


function rotateArray2(array){
    let lastElement = Number(array[array.length - 1]);
    array.pop(lastElement);
    for(let i = 0; i < lastElement; i++ ){
        let newArray = [];
        let constElement = array[array.length - 1];
        newArray.push(constElement);
        for(let j = 0; j < array.length - 1; j ++ ){
            let currentElement = array[j];
            newArray.push(currentElement);
        }
        array = newArray;
    }
    console.log(array.join(" "));
}
rotateArray2(['1', '2', '3', '4', '2']);
rotateArray2(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
