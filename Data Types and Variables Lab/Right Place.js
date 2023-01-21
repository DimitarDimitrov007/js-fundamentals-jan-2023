function rightPlace(stringOne,char,stringTwo){
    let product = "";
    for(let i = 0; i < stringOne.length; i++){
        let currentChar = stringOne[i];
        if(currentChar === "_"){
            currentChar = char;
        }
        product += currentChar;

    }
    if(product === stringTwo){
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }

}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');

console.log("---------------------------------------------------");


function rightPlace(stringOne,char,stringTwo){
    let result = stringOne.replace("_",char);
    let answer = (result === stringTwo ? "Matched" : "Not Matched");
    console.log(answer);

}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');