function sortNumbers(num1,num2,num3){
    let array = [];
    array.push(num1);
    array.push(num2);
    array.push(num3);
    
    let result  = array.sort((a,b)=> b - a);
    console.log(result.join("\n"));
}
sortNumbers(-2,1,3)