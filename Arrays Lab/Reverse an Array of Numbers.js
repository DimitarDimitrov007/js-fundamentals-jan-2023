function reverseArray(num, array) {
    let newArray = [];
    for (let i = 0; i < num; i++) {
        newArray.push(array[i]);
    }
    let finalArray = "";
    for (let j = newArray.length - 1; j >= 0; j--) {
        finalArray += newArray[j] + " ";

    }
    console.log(finalArray);

}
reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);

console.log("-------------------------------------------------");


 function reverseArray(num, array) {
    let newArray = [];
    for (let i = 0; i < num; i++) {
        newArray[num - 1 - i] = array[i];
    }
    let result = "";
    for (let j = 0; j < newArray.length; j++) {
        result += newArray[j];

        if(j < newArray.length - 1){
            result += " ";
        }

    }
    console.log(result);
}
reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]); 