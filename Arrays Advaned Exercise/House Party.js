function houseParty(array) {
    let list = [];
    for (command of array) {
        let currentCommand = command.split(" ");

        if (currentCommand.length === 3) {
            if (list.includes(currentCommand[0])) {
                console.log(`${currentCommand[0]} is already in the list!`);

            } else {
                list.push(currentCommand[0]);
            }
        } else {
            if (list.includes(currentCommand[0])) {
                let i = list.indexOf(currentCommand[0]);
                list.splice(i, 1);
            } else {
                console.log(`${currentCommand[0]} is not in the list!`);
            }
        }
    }

    console.log(list.join("\n"));
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);