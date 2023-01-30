function dungeon(input) {
    let rooms = input[0].split("|");
    let health = 100;
    let coins = 0;
    let roomCount = 0;
    for (let room of rooms) {
        roomCount++;
        let result = room.split(" ");
        let itemMonster = result[0];
        let number = Number(result[1]);
        let healingAmount = 0;

        switch (itemMonster) {
            case "potion":
                health += number;
                if (health > 100) {
                    healingAmount += number - (health - 100)
                    health = 100;
                    console.log(`You healed for ${healingAmount} hp.`);
                } else {
                    healingAmount += number;
                    console.log(`You healed for ${healingAmount} hp.`);
                }
                console.log(`Current health: ${health} hp.`);

                break;
            case "chest":
                console.log(`You found ${number} coins.`);
                coins += number;
                break;
            default:
                health -= number;
                if (health > 0) {
                    console.log(`You slayed ${itemMonster}.`);
                } else {
                    console.log(`You died! Killed by ${itemMonster}.`);
                    console.log(`Best room: ${roomCount}`);
                    return;
                }
                break;


        }

    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

console.log("-----------------------------------------------------------");



function dungeon2(input) {
    let rooms = input[0].split("|");
    let health = 100;
    let coins = 0;
    let roomCount = 0;
    let isDead = false;
    for (let room of rooms) {
        roomCount++;
        let result = room.split(" ");
        let itemMonster = result[0];
        let number = Number(result[1]);


        switch (itemMonster) {
            case "potion":
                if (health + number > 100) {
                    number = number - (health + number - 100);
                }
                health += number;
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                console.log(`You found ${number} coins.`);
                coins += number;
                break;
            default:
                health -= number;
                if (health > 0) {
                    console.log(`You slayed ${itemMonster}.`);
                } else {
                    console.log(`You died! Killed by ${itemMonster}.`);
                    console.log(`Best room: ${roomCount}`);
                    isDead = true;
                }
                break;


        }
        if (isDead) {
            break;
        }

    }
    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeon2(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeon2(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
