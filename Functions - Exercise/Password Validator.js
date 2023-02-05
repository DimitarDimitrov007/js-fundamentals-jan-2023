function passwordValidator(password) {
    let hasProperLength = passwordLengthValidation(password);
    function passwordLengthValidation(password) {
        return password.length >= 6 && password.length <= 10;

    }
    // •	It should consist only of letters and digits
    function validateNonSpecialChar(text) {
        for (let ch of text) {
            let num = ch.charCodeAt(0);
            let isLowerChar = includesLowerCase(num);
            let isUpperChar = includesUpperCase(num);
        }
    }

    function includesUpperCase(num){
        return num >= 65 && num <= 90;
    }

    function includesLowerCase(num) {
        return num >= 97 && num <= 122;

    }
    //•	It should have at least 2 digits 




}
passwordValidator('logIn');