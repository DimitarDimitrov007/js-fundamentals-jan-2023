function countStringOccurrences(text,word){
    let result = text.split(" ");
    let counter = 0;

    for(let el of result){
        if(el === word){
            counter ++;
        }
    }
    
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence','is');
countStringOccurrences('softuni is great place for learning new programming languages','softuni');