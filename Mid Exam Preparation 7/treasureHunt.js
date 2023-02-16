function treasureHunt(array) {
    let chest = array.shift().split("|");

    for (el of array) {
        let currentCommand = el.split(" ");
        let name = currentCommand[0];
        let itemIndexCount = currentCommand[1];
        if (name === "Loot") {
            itemIndexCount = currentCommand.splice(1);

        }

        switch (name) {
            case "Loot":
                for (item of itemIndexCount) {
                    if (!chest.includes(item)) {
                        chest.unshift(item);
                    }
                }
                break;
            case "Drop":
                if (chest[itemIndexCount]) {
                    let removedItem = chest.splice(itemIndexCount, 1);
                    chest.push(removedItem);
                }
                break;
            case "Steal":
                if (chest.length < itemIndexCount) {
                    itemIndexCount = chest.length;
                    let stolenGoods = chest.splice(chest.length - itemIndexCount, itemIndexCount);
                    console.log(stolenGoods.join(", "));
                } else {
                    let stolenGoods = chest.splice(chest.length - itemIndexCount, itemIndexCount);
                    console.log(stolenGoods.join(", "));
                }

                break;
            case "Yohoho!":
                if (chest.length === 0) {
                    console.log("Failed treasure hunt.");
                    return;
                } else {
                    let avgTreasureGain = 0;

                    for (item of chest) {
                        avgTreasureGain += item.length;
                    }

                    avgTreasureGain = (avgTreasureGain / chest.length).toFixed(2);
                    console.log(`Average treasure gain: ${avgTreasureGain} pirate credits.`);
                    return;

                }
        }
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);