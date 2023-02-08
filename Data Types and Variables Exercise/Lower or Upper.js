function lowerOrUpper(letter){
    if(letter === letter.toUpperCase()){
        return "upper-case";
    }
    return "lower-case";

}
console.log(lowerOrUpper('L'));