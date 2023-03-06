function piccolo(cars) {
    let parking = new Set;

    for (let car of cars) {
        let [command, carNumber] = car.split(", ");

        if (command === "IN") {
            parking.add(carNumber);
        } else {
            parking.delete(carNumber);
        }
    }

    let sortedKeys = Array.from(parking.keys()).sort((a, b) => a.localeCompare(b));

    if (parking.size > 0) {
        for (let el of sortedKeys) {
            console.log(el);
        }
    } else {
        console.log("Parking Lot is Empty");
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);