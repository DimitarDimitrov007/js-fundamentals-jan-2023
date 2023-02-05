function charactersInRange(charOne, charTwo) {
    let charOneNumber = charToNumber(charOne);
    let charTwoNumber = charToNumber(charTwo);

    let start = smallestOfTwoNumbers(charOneNumber, charTwoNumber);
    let end = biggestOfTwoNumbers(charOneNumber, charTwoNumber);

    let result = "";
    for (let i = start + 1; i < end; i++) {
        let currentChar = numberToCharacter(i);
        result = concatenation(result,currentChar);
    }

    return result;

    function charToNumber(char) {
        return char.charCodeAt(0);
    }

    function smallestOfTwoNumbers(num1, num2) {
        if (num1 < num2) {
            return num1;
        }
        return num2;
    }

    function biggestOfTwoNumbers(num1, num2) {
        if (num1 > num2) {
            return num1;
        }
        return num2;
    }

    function numberToCharacter(num){
        return String.fromCharCode(num);
    }

    function concatenation(result,string){
        result += string + " ";
        return result;
    }

    
}
console.log(charactersInRange('a', 'd'));