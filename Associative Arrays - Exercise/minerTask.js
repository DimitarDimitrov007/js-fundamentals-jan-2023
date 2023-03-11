function minerTask(array) {
    let result = {};

    for(let i = 0; i < array.length; i += 2){
        let mineral = array[i];
        let quantity = Number(array[i + 1]);
        
        if(!result.hasOwnProperty(mineral)){
            result[mineral] = quantity;

        }else{
            result[mineral] += Number(quantity);

        }
    }

    for(let [mineral,quantity] of Object.entries(result)){
        console.log(`${mineral} -> ${quantity}`);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )