function oddOccurrences(string){
    let obj = {};
    let result = string.split(" ");

    for(let el of result){
        el = el.toLowerCase();
        if(obj.hasOwnProperty(el)){
            obj[el] += 1;
        }else{
            obj[el] = 1;
        }
    }

    let entries = Object.entries(obj);

    let output = [];

    for(let [name,value] of entries){
        if(value % 2 !== 0){
           output.push(name);
        }
    }

    console.log(output.join(" "));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');