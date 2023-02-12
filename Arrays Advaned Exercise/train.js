function train(array) {
    let wagons = array.shift().split(" ").map((x) => Number(x));
    let maxCapacity = Number(array.shift());

    for (command of array) {
        command = command.split(" ");

        if (command[0] === "Add") {
            wagons.push(command[1]);
        } else {
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + Number(command[0]) <= maxCapacity) {
                    wagons[i] += Number(command[0]);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);