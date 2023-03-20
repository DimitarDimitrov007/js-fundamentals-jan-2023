function softUniBarIncome(array) {
    let totalIncome = 0;
    let regExp = /%(?<name>[A-Z]{1}[a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+.?\d+)\$/;
    for (let line of array) {
        if (line === 'end of shift') {
            break;
        }

        if (regExp.test(line)) {
            let result = regExp.exec(line);
            let totalPrice = Number(result.groups.count * result.groups.price);
            console.log(`${result.groups.name}: ${result.groups.product} - ${totalPrice.toFixed(2)}`);
            totalIncome += totalPrice;
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)