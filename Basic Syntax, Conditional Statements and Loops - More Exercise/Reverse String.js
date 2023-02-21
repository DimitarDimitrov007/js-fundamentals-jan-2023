function reverseString(input){
    let string = String(input);
    let result = "";
    for(let  i = string.length - 1; i >= 0; i--){
        let currentLetter = string[i];
        result += currentLetter;
    }
    console.log(result);

}
reverseString("SoftUni");
