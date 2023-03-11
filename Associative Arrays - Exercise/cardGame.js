function cardGame(array) {
    let players = new Map;

    let types = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }


    let powers = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }

    for (let line of array) {
        let [player, cards] = line.split(": ");

        if (!players.has(player)) {
            players.set(player, new Set);
        }
        cards = cards.split(", ");

        for (let card of cards) {
            if (!players.get(player).has(card)) {
                players.get(player).add(card);
            }
        }
    }

    let keys = players.keys();

    for (let player of keys) {
        let cards = Array.from(players.get(player));
        let sum = 0;
        for (let card of cards) {
            card = card.split("");
            let type = card.pop();
            let power = card.join("");
            let cardValue = powers[power] * types[type];
            sum += cardValue;

        }

        console.log(`${player}: ${sum}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    )