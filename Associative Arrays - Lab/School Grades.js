function schoolGrades(array) {
    let obj = {};

    for (let line of array) {
        let tokens = line.split(" ");
        let name = tokens[0];
        let grades = tokens.slice(1);
    
        if (obj.hasOwnProperty(name)) {
            obj[name] = obj[name].concat(grades);
        } else {
            obj[name] = grades;
        }
    }

    let sortedEntries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for(let [name,grades] of sortedEntries){
        let sum = 0;
        for(let el of grades){
            sum += Number(el);
        }
        sum = (sum / grades.length).toFixed(2);
        console.log(`${name}: ${sum}`);

    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);

schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
]);