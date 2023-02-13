function wall(array) {
    let totalConcrete = [];
    let dailyConcrete = 0;
    let concrete = 0;
    while (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 30) {
                array[i] += 1;
                dailyConcrete += 195;
            } else {
                let index = array.indexOf(array[i]);
                array.splice(index, 1);
                i -= 1;
            }
        }
        concrete += dailyConcrete;
        if (dailyConcrete > 0) {
            totalConcrete.push(dailyConcrete);
        }

        dailyConcrete = 0;
    }

    console.log(totalConcrete.join(", "));
    console.log(`${concrete * 1900} pesos`);
}
wall([17]);