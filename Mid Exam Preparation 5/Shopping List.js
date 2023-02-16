function shoppingList(array) {

    let list = array.shift().split("!");

    for (el of array) {
        let currentCommand = el.split(" ");
        let name = currentCommand[0];
        let item = currentCommand[1];
        let item2 = currentCommand[2];

        switch (name) {
            case "Urgent":
                if (!list.includes(item)) {
                    list.unshift(item);

                }
                break;
            case "Unnecessary":
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1);

                }
                break;
            case "Correct":
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1, item2);

                }
                break;
            case "Rearrange":
                if (list.includes(item)) {
                    let index = list.indexOf(item)
                    let removedItem = list.splice(index, 1);
                    list.push(removedItem);
                }
                break;
            case "Go":
                console.log(list.join(", "));
                return;
        }
    }
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
