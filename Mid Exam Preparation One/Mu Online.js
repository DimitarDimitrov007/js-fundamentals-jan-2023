function muOnline(string) {
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;

    let rooms = string.split("|");

    for (el of rooms) {
        roomCounter ++;
        el = el.split(" ");
        let partOne = el[0];
        let partTwo = Number(el[1]);

        switch (partOne) {
            case "potion":
                let healedAmount = partTwo;
                if(health + healedAmount> 100){
                    healedAmount = healedAmount - (health + healedAmount - 100);
                    health += healedAmount;
                    console.log(`You healed for ${healedAmount} hp.`);
                }else{
                    health += healedAmount;
                    console.log(`You healed for ${healedAmount} hp.`);
                }

                console.log(`Current health: ${health} hp.`);
                break;

            case "chest":
                console.log(`You found ${partTwo} bitcoins.`);
                bitcoins += partTwo;
                break;

            default:
                health -= partTwo;
                if(health > 0){
                    console.log(`You slayed ${partOne}.`);
                }else{
                    console.log(`You died! Killed by ${partOne}.`);
                    console.log(`Best room: ${roomCounter}`);
                    return;
                }
                break;
        }

    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);

}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");