function movingTarget(array) {
    let targets = array.shift().split(" ").map(x => Number(x));

    for (el of array) {
        let command = el.split(" ");
        let name = command[0];
        let index = Number(command[1]);
        let powerValueRadius = Number(command[2]);

        switch (name) {
            case "Shoot":
                if (targets[index]) {
                    targets[index] -= powerValueRadius;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case "Add":
                if (targets[index]) {
                    targets.splice(index, 0, powerValueRadius);

                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                if (index - powerValueRadius < 0 || index + powerValueRadius > targets.length || !targets[index]) {
                    console.log("Strike missed!");
                } else {
                    targets.splice(index - powerValueRadius, powerValueRadius * 2 + 1);
                }
                break;
            case "End":
                console.log(targets.join("|"));
                return;
        }
    }
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
;
