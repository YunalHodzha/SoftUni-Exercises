function partyTime(arr) {
    let list = []
    let partyIndex = 0;
    let arrived = [];

    for (let guest of arr) {
        if (guest === "PARTY") {
            partyIndex = arr.indexOf(guest);
            arrived = arr.splice(partyIndex + 1);
            break;
        } else {
            list.push(guest);
        }
    }

    for (let guest of arrived) {
        if (list.includes(guest)) {
            let indexOf = list.indexOf(guest);
            list.splice(indexOf, 1);
        }
    }

    let vip = [];
    let reguler = [];
    let counter = 0;

    for (let guest of list) {
        if (guest[0] >= "0" && guest[0] <= "9") {
            vip.push(guest);
            counter++;
        } else {
            reguler.push(guest);
            counter++;
        }
    }

    console.log(counter);
    vip.forEach((el) => console.log(el));
    reguler.forEach((el) => console.log(el));
}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);
console.log("---------------");
partyTime([
    'm8rfQBvl',
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
]);