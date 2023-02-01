function nElement(array){
    let newArray= [];
    let lastElement = Number(array[array.length - 1]);
    
    for(let i = 0 ; i < array.length - 1; i += lastElement){
        newArray.push(array[i]);
    }
    console.log(newArray.join(" "))
 
}
nElement(['5', '20', '31', '4', '20', '2']);
nElement(['dsa', 'asd', 'test', 'test', '2']);
nElement(['1', '2', '3', '4', '5', '6']);