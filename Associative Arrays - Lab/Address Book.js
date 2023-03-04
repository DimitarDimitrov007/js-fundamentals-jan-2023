function addressBook(array) {
    let obj = {};

    for (let line of array) {
        let [name, address] = line.split(":");
        obj[name] = address;
    }

    let sortedEntries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of sortedEntries) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);