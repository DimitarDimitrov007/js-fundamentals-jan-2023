function commonElements(arrayOne,arrayTwo){
    for(let i = 0 ; i < arrayOne.length; i++){
        for(let j = 0; j < arrayTwo.length; j++){
            let currentElementOne = arrayOne[i];
            let currentElementTwo = arrayTwo[j];
            if(currentElementOne === currentElementTwo){
                console.log(currentElementOne);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l']);


console.log("--------------------------------------------------"); 


function commonElements2(arrayOne,arrayTwo){
    for(let i = 0 ; i < arrayOne.length; i++){
       for(let element of arrayTwo){
        let elementOne = arrayOne[i];
        if(element === elementOne){
            console.log(elementOne);
        }
       }
    }
}
commonElements2(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements2(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l']);
