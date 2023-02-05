function palindromeIntegers(array) {
    for (let i = 0; i < array.length; i++) {
        let intToString = String(array[i]);
        let reversedText = reverse(intToString);
        let result = checkIfEqual(intToString,reversedText);
        console.log(result);
    }

    function reverse(text) {
        let buff = "";
        for (let j = text.length - 1; j >= 0; j--) {
            buff += text[j];

        }
        return buff;

    }

    function checkIfEqual(text1,text2){
        return text1 === text2;
    }

}
palindromeIntegers([123,323,421,121]);
