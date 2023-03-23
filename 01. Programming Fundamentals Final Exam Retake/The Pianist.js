function thePianist(array) {
    let n = array.shift();
    let collection = {};

    for (let i = 0; i < n; i++) {
        let currentLine = array[i];
        let [piece, composer, key] = currentLine.split("|");

        collection[piece] = {
            composer,
            key,
        }
    }

    for (let i = n; i < array.length; i++) {
        let currentLine = array[i];
        let [command, piece, composerNewKey, key] = currentLine.split("|");

        switch (command) {
            case "Add":
                if(collection.hasOwnProperty(piece)){
                    console.log(`${piece} is already in the collection!`);

                }else{
                    let composer = composerNewKey
                    collection[piece] = {composer,key};
                    console.log(`${piece} by ${composerNewKey} in ${key} added to the collection!`);

                }
                break;
            case "Remove":
                if(collection.hasOwnProperty(piece)){
                    delete collection[piece];
                    console.log(`Successfully removed ${piece}!`);

                }else{
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);

                }
                break;
            case "ChangeKey":
                if(collection.hasOwnProperty(piece)){
                    collection[piece].key = composerNewKey;
                    console.log(`Changed the key of ${piece} to ${composerNewKey}!`);

                }else{
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);

                }
                break;
        }
    }

    for(let [piece,values] of Object.entries(collection) ){
        console.log(`${piece} -> Composer: ${values.composer}, Key: ${values.key}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);