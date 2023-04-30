function cardGame(arr) {
    let players = new Map();

    for (let playerData of arr) {
        let [name, hand] = playerData.split(": ");

        if (!players.has(name)) {
            players.set(name, new Set());
        }
        let cards = hand.split(", ");
        for (let card of cards) {
            players.get(name).add(card);
        }
    }

    for (let player of players) {
        let sum = 0;

        for (let cards of player[1]) {
            let card = jQkA(cards.slice(0, -1));
            let power = powerOf(cards.slice(-1));

            sum += card * power;
        }
        console.log(`${player[0]}: ${sum}`);
    }

    function powerOf(power) {
        if (power === "C") {
            return 1;
        } else if (power === "D") {
            return 2;
        } else if (power === "H") {
            return 3;
        } else if (power === "S") {
            return 4;
        }
    }

    function jQkA(card) {
        if (card === "J") {
            return 11;
        } else if (card === "Q") {
            return 12;
        } else if (card === "K") {
            return 13;
        } else if (card === "A") {
            return 14;
        } else {
            return Number(card);
        }
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);
console.log("----------------");
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD']);