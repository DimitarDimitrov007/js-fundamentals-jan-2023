function memoryGame(array) {
    let sequence = array.shift().split(" ");
    let index = 0;
    let currentCommand = array[index];
    index++;
    let moves = 0;

    while (currentCommand !== "end") {
        moves++
        currentCommand = currentCommand.split(" ");
        let indexOne = Number(currentCommand[0]);
        let indexTwo = Number(currentCommand[1]);

        if (indexOne === indexTwo || !sequence[indexOne] || !sequence[indexTwo]) {
            sequence.splice((sequence.length / 2), 0, `-${moves}a`, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");

            currentCommand = array[index];
            index++;
            continue;
        }

        if (sequence[indexOne] === sequence[indexTwo]) {
            console.log(`Congrats! You have found matching elements - ${sequence[indexOne]}!`);
            sequence.splice(indexOne, 1);
            if (indexTwo - 1 < 0) {
                sequence.splice(0, 1);
            }else{
                sequence.splice(indexTwo - 1, 1);
            }

        } else {
            console.log("Try again!");
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }

        currentCommand = array[index];
        index++;
    }

    if (sequence.length > 0) {
        console.log(`Sorry you lose :( 
${sequence.join(" ")}`)
    }

}
memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    
);