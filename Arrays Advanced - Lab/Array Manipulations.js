function arrayManipulations(array) {
    let arrayForManipulation = array
        .shift()
        .split(" ")
        .map((x) => x = Number(x));

    for (let command of array) {
        let result = command.split(" ");
        let name = result[0];
        let number = Number(result[1]);
        let index = Number(result[2]);

        switch (name) {
            case "Add":
                arrayForManipulation.push(number);
                break;
            case "Remove":
                arrayForManipulation = arrayForManipulation.filter(x => x !== number);
                break;
            case "RemoveAt":
                arrayForManipulation.splice(number, 1);
                break;
            case "Insert":
                arrayForManipulation.splice(index, 0, number);
                break;
        }
    }
    console.log(arrayForManipulation.join(" "));

}
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);

console.log("--------------------------------------");



