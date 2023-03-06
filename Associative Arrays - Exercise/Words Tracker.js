function wordTracker(array) {
    let obj = {};
    let words = array.shift().split(" ");

    for(let el of words){
        obj[el] = 0;
    }

    for(let el of array){
        if(obj.hasOwnProperty(el)){
            obj[el] += 1;
        }
    }

    let sortedEntries = Object.entries(obj).sort((a,b) => b[1] - a[1]);

    for(let [name,value] of sortedEntries){
        console.log(`${name} - ${value}`);
    }
}
wordTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
wordTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );