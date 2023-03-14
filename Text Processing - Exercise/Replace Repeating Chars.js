function replaceRepeatingChars(string){
    let result = "";
    let startIndex = 0;
    for(let i = 0; i < string.length; i++){
        let currentChar = string[i];
        if(currentChar !== string[startIndex]){
            result += string.substring(startIndex,startIndex +1);
            startIndex = i;
        }
    }

    result += string.substring(startIndex,startIndex + 1);

    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');