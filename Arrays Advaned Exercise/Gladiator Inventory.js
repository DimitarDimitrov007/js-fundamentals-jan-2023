function gladiatorInventory(array) {
    let inventory = array.shift().split(" ");
    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i].split(" ");
        let commandName = currentCommand[0];
        let item = currentCommand[1];

        switch (commandName) {
            case "Buy":
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case "Trash":
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    inventory.splice(index, 1);
                }
                break;
            case "Repair":
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    inventory.splice(index, 1);
                    inventory.push(item);
                }
                break;
            case "Upgrade":
                let result = item.split("-");
                if (inventory.includes(result[0])) {
                    let index = inventory.indexOf(result[0]);
                    let upgrade = result[0] + ":" + result[1]
                    inventory.splice(index + 1, 0, upgrade);
                }
                break;
        }
    }

    console.log(inventory.join(" "));
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
);