function cutAndReverse(string){
    let stringOne = string.substring(0,string.length / 2);
    let stringTwo = string.substring(string.length / 2);

    let resultOne = reversingStrings(stringOne)
    let resultTwo = reversingStrings(stringTwo)

    console.log(resultOne);
    console.log(resultTwo);

    function reversingStrings(stringToReverse,result){
        result = "";
        for(let i = stringToReverse.length -1; i >= 0; i--){
            let currentChar = stringToReverse[i];
            result += currentChar;
        }

        return result;
    }
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');