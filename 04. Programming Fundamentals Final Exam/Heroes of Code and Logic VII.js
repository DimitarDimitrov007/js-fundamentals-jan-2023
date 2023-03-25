function heroes(array) {
    let n = array.shift();
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let currentLine = array[i];
        let [hero, HP, MP] = currentLine.split(" ");

        heroes[hero] = {
            HP: HP,
            MP: MP,
        }
    }

    for (let i = n; i < array.length; i++) {
        let currentLine = array[i];

        if (currentLine === "End") {
            break;
        }

        let [command, heroName, mpDamageAmount, spellAttacker] = currentLine.split(" - ");

        switch (command) {
            case "CastSpell":
                if (heroes[heroName].MP >= Number(mpDamageAmount)){
                    heroes[heroName].MP = Number(heroes[heroName].MP) - Number(mpDamageAmount);
                    console.log(`${heroName} has successfully cast ${spellAttacker} and now has ${heroes[heroName].MP} MP!`);

                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellAttacker}!`);

                }
                break;
            case "TakeDamage":
                heroes[heroName].HP -= Number(mpDamageAmount);
                if (heroes[heroName].HP > 0) {
                    console.log(`${heroName} was hit for ${mpDamageAmount} HP by ${spellAttacker} and now has ${heroes[heroName].HP} HP left!`);

                } else {
                    console.log(`${heroName} has been killed by ${spellAttacker}!`);
                    delete heroes[heroName];

                }
                break;
            case "Recharge":
                let manaNeeded = 200 - Number(heroes[heroName].MP);

                if (Number(heroes[heroName].MP) + Number(mpDamageAmount) > 200) {
                    heroes[heroName].MP = 200;
                    console.log(`${heroName} recharged for ${manaNeeded} MP!`);

                } else {
                    heroes[heroName].MP = Number(heroes[heroName].MP) + Number(mpDamageAmount);
                    console.log(`${heroName} recharged for ${mpDamageAmount} MP!`);
                }
                break;
            case "Heal":
                let hpNeeded = 100 - heroes[heroName].HP;

                if (Number(heroes[heroName].HP) + Number(mpDamageAmount) > 100) {
                    heroes[heroName].HP = 100;
                    console.log(`${heroName} healed for ${hpNeeded} HP!`);

                } else {
                    heroes[heroName].HP = Number(heroes[heroName].HP) + Number(mpDamageAmount);
                    console.log(`${heroName} healed for ${mpDamageAmount} HP!`);
                }
                break;

        }

    }

    for (let hero in heroes) {
        console.log(`${hero}
  HP: ${heroes[hero].HP}
  MP: ${heroes[hero].MP}`);

    }
}
heroes([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
])