function convertToJSON(firstName,secondName,color){
    let person = {
        name : firstName,
        lastName : secondName,
        hairColor : color,  
    }
    let result = JSON.stringify(person);
    console.log(result);

}
convertToJSON('George', 'Jones', 'Brown');