function dictionary(array){
    let objects = {};
    for(let line of array){
        line = JSON.parse(line);
        let keys = Object.keys(line);
        let key = keys[0];
        objects[key] = line[key];
    }

    let sortedKeys = Object.keys(objects).sort((a,b)=> a.localeCompare(b));

    for(let el of sortedKeys){
        console.log(`Term: ${el} => Definition: ${objects[el]}`);
    }
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );