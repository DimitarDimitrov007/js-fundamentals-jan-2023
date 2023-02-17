function inventory(array) {
    let journal = array.shift().split(", ");

    for (el of array) {
        let currentCommand = el.split(" - ");
        let name = currentCommand[0];
        let item = currentCommand[1];
        let item2 = currentCommand[2];

        if (name === "Combine Items") {
            let newCommand = currentCommand[1].split(":");
            item = newCommand[0];
            item2 = newCommand[1];
        }

        switch (name) {
            case "Collect":
                if (!journal.includes(item)) {
                    journal.push(item);
                }
                break;
            case "Drop":
                if (journal.includes(item)) {
                    let index = journal.indexOf(item);
                    journal.splice(index, 1);
                }
                break;
            case "Combine Items":
                if (journal.includes(item)) {
                    let index = journal.indexOf(item);
                    journal.splice(index + 1 , 0, item2);
                }
                break;
            case "Renew":
        if (journal.includes(item)) {
            let index = journal.indexOf(item);
            let removedItem = journal.splice(index, 1);
            journal.push(removedItem);
        }
        break;
            case "Craft!":
        console.log(journal.join(", "));
        return;
    }
}
}
inventory(['A, B, C, D', 'Combine Items - C:C1', 'Craft!']);