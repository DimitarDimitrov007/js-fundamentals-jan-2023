function repeatString (text, number) {
    let result = "";
    for (let i = 0; i < number; i++) {
        result += text;

    }

    return result;

}

let repeatedString = repeatString("String", 2);
console.log(repeatedString);

