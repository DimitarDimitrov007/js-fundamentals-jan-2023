function partyTime(array) {
    let vipList = [];
    let regularList = [];
    let going = [];

    let index = 0;
    let currentLine = array[index];
    index++;

    while (currentLine !== 'PARTY') {
        if (isNaN(currentLine[0])) {
            regularList.push(currentLine);

        } else {
            vipList.push(currentLine);
        }

        currentLine = array[index];
        index++;
    }

    for (let i = index; i < array.length; i++) {
        let currentGuest = array[i];

        if (!isNaN(currentGuest[0])) {
            if (vipList.includes(currentGuest)) {
                let index = vipList.indexOf(currentGuest);
                going.push(vipList.splice(index, 1));
            }

        } else if (regularList.includes(currentGuest)) {
            let index = regularList.indexOf(currentGuest);
            going.push(regularList.splice(index, 1));
        }
    }

    console.log(vipList.length + regularList.length);
    if (vipList.length > 0) {
        console.log(vipList.join("\n"));
    }
    console.log(regularList.join("\n"));
}
/*partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]); */

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)