function arrayRotation(array, rotationCount) {
    let newArray = [];
    for (let i = 0; i < rotationCount; i++) {
        let firstElement = array[0];
        for (let j = 1; j < array.length; j++) {
            let currentElement = array[j];
            newArray.push(currentElement);
        }
        newArray.push(firstElement);
        array = newArray;
        newArray = [];
    }

    let result = "";
    for (let k = 0; k < array.length; k++) {
        result += array[k];
        if (k < array.length - 1) {
            result += " "; 

        }
    }
    console.log(result);
    // ИЛИ
    //console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);