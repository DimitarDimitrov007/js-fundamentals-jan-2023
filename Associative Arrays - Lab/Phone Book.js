function phoneBook(array) {
    let person = {};

    for (let line of array) {
        let [name, phone] = line.split(" ");
        person[name] = phone;

    }

    for (let name in person) {
        console.log(`${name} -> ${person[name]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
]);