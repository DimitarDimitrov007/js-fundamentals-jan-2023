function worldOccurrences(array) {
    let obj = {};

    for (let el of array) {
        if(obj.hasOwnProperty(el)){
            obj[el] += 1;
        }else{
            obj[el] = 1;
        }
    }

    let sortedEntries = Object.entries(obj).sort((a,b) => b[1] - a[1]);

    for(let el of sortedEntries){
        console.log(`${el[0]} -> ${el[1]} times`);
    }
}
worldOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);