function adAstra(array) {
    let text = array.shift();
    let reExp = /(\||#)(?<itemName>[A-Za-z ]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]{1,5})\1/g;
    let totalCalories = 0;

    let items = text.matchAll(reExp);

    for (let item of items) {
        let currentCalories = Number(item.groups.calories);
        totalCalories += currentCalories;

    }

    let days = Math.floor(totalCalories / 2000)

    console.log(`You have food to last you for: ${days} days!`);

    let matches = text.matchAll(reExp);

    for (let item of matches) {

        console.log(`Item: ${item.groups.itemName}, Best before: ${item.groups.date}, Nutrition: ${item.groups.calories}`);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])