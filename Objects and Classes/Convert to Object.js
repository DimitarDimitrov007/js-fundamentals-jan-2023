function convertToObject(string){
    let object = JSON.parse(string);

    for(key of Object.keys(object)){
        console.log(`${key}: ${object[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');