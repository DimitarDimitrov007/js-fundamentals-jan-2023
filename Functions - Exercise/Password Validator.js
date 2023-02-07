function passwordValidator(password) {
    let hasProperLength = passwordLengthValidation(password);
    let hasSpecialChar = validateNonSpecialChar(password);
    let hasTwoNumbers = containsTwoNumbers(password);

    return printResult(hasProperLength,hasSpecialChar,hasTwoNumbers);

    function passwordLengthValidation(password) {
        return password.length >= 6 && password.length <= 10;

    }
   
    function validateNonSpecialChar(text) {
        for (let ch of text) {
            let num = ch.charCodeAt(0);
            let isLowerChar = includesLowerCase(num);
            let isUpperChar = includesUpperCase(num);
            let isNumber = includesNumber(num);

            if(!isLowerChar && !isUpperChar && !isNumber){
                return false;
            }
           
        }
        return true;
    }

    function includesUpperCase(num){
        return num >= 65 && num <= 90;
    }

    function includesLowerCase(num) {
        return num >= 97 && num <= 122;
    }

    function includesNumber(num){
        return num >= 48 && num <= 57;
    }
   
    function containsTwoNumbers(password){
        let counter = 0;
        for(let ch of password){
            let isNumber = includesNumber(ch.charCodeAt(0));

            if(isNumber){
                counter ++;
            }
        }
        return counter >= 2;
    }

    function printResult(validLength,validSymbols,validDigits){
        if(!validLength){
            console.log("Password must be between 6 and 10 characters");
        }

        if(!validSymbols){
            console.log("Password must consist only of letters and digits");
        }

        if(!validDigits){
            console.log("Password must have at least 2 digits");
        }

        if(validLength && validSymbols && validDigits){
            console.log("Password is valid");
        }
    }
}
passwordValidator('Pa$s$s');