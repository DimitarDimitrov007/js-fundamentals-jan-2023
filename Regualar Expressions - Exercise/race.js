function race(array) {
    let players = {};

    let namePattern = /[A-Za-z]+/g;
    let digitPattern = /\d/g;
    let playersArr = array.shift().split(", ");

    for (let line of array) {
        if (line === 'end of race') {
            break;
        }

        let name = line.match(namePattern).join("");
        let distance = 0;
        let digits = line.match(digitPattern);
        for (let digit of digits) {
            distance += Number(digit);
        }

        if (players.hasOwnProperty(name)) {
            players[name] += distance;

        } else {
            if (playersArr.includes(name)) {
                players[name] = distance;
            }
        }
    }

    let sortedPlayers = Object.entries(players).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedPlayers[0][0]}`);
    console.log(`2nd place: ${sortedPlayers[1][0]}`);
    console.log(`3rd place: ${sortedPlayers[2][0]}`);
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
)