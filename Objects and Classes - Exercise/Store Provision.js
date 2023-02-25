function storeProvision(stock,ordered) {
    let object = {};

    for(let i = 0; i < stock.length; i+=2){
        let key = stock[i];
        let value = Number(stock[i +1]);
        object[key] = value;
    }

    for(let i = 0; i < ordered.length; i+=2){
        let key = ordered[i];
        let value = Number(ordered[i + 1]);

        if(object.hasOwnProperty(key)){
            object[key] += value;
        }else{
            object[key] = value;
        }
    }

    for(let key of Object.keys(object)){
        console.log(`${key} -> ${object[key]}`);
    }
}
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    );