function furniture(array) {
    let regExp = />>(?<item>[A-Za-z]+)<<(?<price>\d+.?\d+)\!(?<quantity>\d+)/;
    let totalCost = 0;

    console.log("Bought furniture:");

    for (let line of array) {
        if (line === 'Purchase') {
            break;
        }

        if (regExp.test(line)) {
            let result = regExp.exec(line);
            console.log(result.groups.item);
            totalCost += Number(result.groups.price * result.groups.quantity);
        }
    }

    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
)