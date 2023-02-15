function lift(array) {
    let maxAmount = 4;
    let people = Number(array[0]);
    let liftState = array[1].split(" ").map(x => Number(x));
    let index = 0;
   

    while (people > 0) {
        let isFull = [];
        if (people < maxAmount) {
            maxAmount = people;
        }

        if (liftState[index] + maxAmount <= 4) {
            liftState[index] += maxAmount;
            people -= maxAmount;
        } else if (liftState[index] + maxAmount > 4) {
            people -= 4 - liftState[index];
            liftState[index] += (4 - liftState[index]);
        }


        isFull = liftState.filter(x => x === 4);
        if (people <= 0 && isFull.length !== liftState.length) {
            console.log("The lift has empty spots!");
            console.log(liftState.join(" "));
            return;

        } else if (people > 0 && isFull.length === liftState.length) {
            console.log(`There isn't enough space! ${people} people in a queue!`);
            console.log(liftState.join(" "));
            return;

        } else if(isFull.length === liftState.length &&  people <= 0) {
            console.log(liftState.join(" "));
            return;
        }

        index++;
    }
}
lift(["14", "0 2 0 1 3"]);
