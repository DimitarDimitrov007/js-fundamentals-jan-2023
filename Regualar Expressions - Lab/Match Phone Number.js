function matchPhoneNumber(array) {
    let regExp = /\+359([ -])2\1\d{3}\1\d{4}\b/gm;
    let match = regExp.exec(array[0]);
    let result = "";

    while (match !== null) {
        result += match[0] + ", " ;
        match = regExp.exec(array[0]);
    }

    result = result.substring(0,result.length - 2);

    console.log(result);

}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);