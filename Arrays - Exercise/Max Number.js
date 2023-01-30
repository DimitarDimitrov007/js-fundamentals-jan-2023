function maxNumber(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        let currentElement = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let otherElement = array[j];
            if (currentElement <= otherElement) {
                isBigger = false;
                break;
            }
        }
        if(isBigger){
            newArray.push(currentElement);
        }
    }
    console.log(newArray.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);