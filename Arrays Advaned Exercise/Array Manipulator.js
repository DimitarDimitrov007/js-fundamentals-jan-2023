function arrayManipulator(numbers, commands) {
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(" ");
        let commandName = currentCommand[0];
        let index = Number(currentCommand[1]);
        let element = Number(currentCommand[2]);

        if (commandName === "addMany") {
            element = currentCommand.splice(2).map((x) => Number(x)).join(", ");
        }

        switch (commandName) {
            case "add":
                numbers.splice(index, 0, element);
                break;
            case "addMany":
                numbers.splice(index, 0, element)
                break;
            case "contains":
                if (numbers.includes(index)) {
                    console.log(numbers.indexOf(index));
                } else {
                    console.log("-1");
                }
                break;
            case "remove":
                numbers.splice(index, 1);
                break;
            case "shift":

                for (let i = 0; i < index; i++) {
                    let firstElement = numbers.shift();
                    numbers.push(firstElement);
                }
                break;
            case "sumPairs":
                let output = [];
                for (let i = 0; i < numbers.length; i += 2) {
                    let sum = 0;
                    let currentElement = numbers[i];
                    let nextElement = numbers[i + 1];
                    if (nextElement === undefined) {
                        sum = currentElement
                    } else {
                        sum = Number(currentElement) + Number(nextElement);
                    }

                    output.push(sum);
                }
                numbers = output;
                break;
            case "print":
                console.log(`[ ${numbers.join(", ")} ]`);
                break;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
