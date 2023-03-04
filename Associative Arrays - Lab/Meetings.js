function meetings(array) {
    let obj = {};

    for (let line of array) {
        let [day, person] = line.split(" ");
        if (obj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            obj[day] = person;
        }
    }

    for (let day in obj) {
        console.log(`${day} -> ${obj[day]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);