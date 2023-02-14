function manOWar(array) {
    let pirateShipStatus = array.shift().split(">").map((x) => Number(x));
    let warShipStatus = array.shift().split(">").map((x) => Number(x));
    let maxHealthPerSection = Number(array.shift());

    for (command of array) {
        command = command.split(" ");
        let name = command[0];
        let index = Number(command[1]);
        let damageEndIndexHealth = Number(command[2]);
        let damage = Number(command[3]);

        switch (name) {
            case "Fire":
                if (warShipStatus[index]) {
                    warShipStatus[index] = warShipStatus[index] - damageEndIndexHealth;
                    if (warShipStatus[index] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;

            case "Defend":
                if (pirateShipStatus[index] && pirateShipStatus[damageEndIndexHealth]) {
                    for (let i = index; i <= damageEndIndexHealth; i++) {
                        pirateShipStatus[i] = pirateShipStatus[i] - damage;
                        if (pirateShipStatus[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }
                break;

            case "Repair":
                if (pirateShipStatus[index]) {
                    if (pirateShipStatus[index] + damageEndIndexHealth > maxHealthPerSection) {
                        pirateShipStatus[index] = maxHealthPerSection;
                    } else {
                        pirateShipStatus[index] = pirateShipStatus[index] + damageEndIndexHealth;
                    }
                }
                break;

            case "Status":
                let count = 0;
                for (let i = 0; i < pirateShipStatus.length; i++) {
                    if (pirateShipStatus[i] < maxHealthPerSection * 0.2) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;

        }
    }

    let pirateShipSum = 0;
    let warShipSum = 0;
    for(section of pirateShipStatus){
        pirateShipSum += section;
    }

    for(section of warShipStatus){
        warShipSum += section;
    }

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);

}
manOWar((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
);