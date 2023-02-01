function addAndRemove(array){
    let number = 0;
    let newArray = [];
    for(let i = 0 ; i < array.length; i++){
        let command = array[i];
        number++;

        if(command === "add"){
            newArray.push(number);

        }else{
            newArray.pop();
        }
    }
    
    if(newArray.length <= 0){
        console.log("Empty");
    }else{
        console.log(newArray.join(" "));
    }
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);