function storage(array) {
    let items = new Map();

    for (let line of array) {
        let [item, quantity] = line.split(" ");
        if (items.has(item)) {
            let currentQuantity = items.get(item);
            let newQuantity = currentQuantity + Number(quantity);
            items.set(item, newQuantity);
        } else {
            items.set(item, Number(quantity));
        }
    }

    let result = items.entries();

    for (let el of result) {
        console.log(`${el[0]} -> ${el[1]}`)
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);