function catalogue(array) {
    let products = [];
    for(let line of array){
        let [name,price] = line.split(" : ");
        products.push({name : name,price : Number(price)});
    }

    products.sort((a,b) => a.name.localeCompare(b.name));

    let groupChar = products[0].name[0];
    console.log(groupChar)
    for(let el of products){
        if(el.name[0] !== groupChar){
            groupChar = el.name[0];
            console.log(groupChar);
        }
        console.log(`  ${el.name}: ${el.price}`)
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);