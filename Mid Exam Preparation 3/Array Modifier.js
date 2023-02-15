function arrayModifier(array) {
    let sequence = array.shift().split(" ").map(x => Number(x));

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");
        let name = command[0];
        let indexOne = Number(command[1]);
        let indexTwo = Number(command[2]);


        switch (name) {
            case "swap":
                let valueBeforeChange = sequence[indexOne];
                sequence[indexOne] = sequence[indexTwo];
                sequence[indexTwo] = valueBeforeChange;
                break;
            case "multiply":
                sequence[indexOne] = sequence[indexOne] * sequence[indexTwo];
                break;
            case "decrease":
                for(let i = 0; i < sequence.length; i++){
                    sequence[i] -= 1;
                }
                break;

        }
    }

    console.log(sequence.join(", "));

}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  );