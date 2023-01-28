function reverseInPlace(array) {
    for (let i = 0; i < array.length / 2 ; i++) {
        let currentElement = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = currentElement;
    }
    let result = "";
    for (let j = 0; j < array.length; j++){
        result += array[j];
        if(j < array.length - 1){
            result += " ";
        }
    }
    console.log(result); 
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);