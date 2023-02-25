function employee(array) {
    let obj = {};

    for(let name of array){
         obj[name] = name.length;
    }
    
    for(let key of Object.keys(obj)){
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
    }

}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);