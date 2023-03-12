function legendaryFarming(string) {
    let goodies = {
        fragments: 0,
        shards: 0,
        motes: 0,
    }

    let junk = {};

    let items = string.split(" ");

    for (let i = 0; i < items.length; i += 2) {
        let quantity = Number(items[i]);
        let item = items[i + 1].toLowerCase();

        if (goodies.hasOwnProperty(item)) {
            goodies[item] += quantity;
        } else {
            if (junk.hasOwnProperty(item)) {
                junk[item] += quantity;
            } else {
                junk[item] = quantity;
            }
        }

        if (goodies.fragments >= 250) {
            console.log(`Valanyr obtained!`);
            goodies.fragments -= 250;

            let sortedGoodies = Object.entries(goodies).sort((a, b) => {
                return b[1] - a[1] || a[0].localeCompare(b[0]);
            });

            for (let [name, quantity] of sortedGoodies) {
                console.log(`${name}: ${quantity}`);
            }
            break;
        } else if (goodies.shards >= 250) {
            console.log(`Shadowmourne obtained!`);
            goodies.shards -= 250;

            let sortedGoodies = Object.entries(goodies).sort((a, b) => {
                return b[1] - a[1] || a[0].localeCompare(b[0]);
            });

            for (let [name, quantity] of sortedGoodies) {
                console.log(`${name}: ${quantity}`);
            }
            break;
        } else if (goodies.motes >= 250) {
            console.log(`Dragonwrath obtained!`);
            goodies.motes -= 250;

            let sortedGoodies = Object.entries(goodies).sort((a, b) => {
                return b[1] - a[1] || a[0].localeCompare(b[0]);
            });

            for (let [name, quantity] of sortedGoodies) {
                console.log(`${name}: ${quantity}`);
            }
            break;
        }

    }
    let sortedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b));
    for (let [item, quantity] of sortedJunk) {
        console.log(`${item}: ${quantity}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')