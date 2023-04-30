function aMinerTast(data) {
    let resources = new Map();

    for (let i = 0; i < data.length; i += 2) {
        let resource = data[i];
        let quantity = Number(data[i + 1]);

        if (!resources.has(resource)) {
            resources.set(resource, quantity);
        } else {
            let currentSum = resources.get(resource) + quantity;
            resources.set(resource, currentSum);
        }
    }

    let list = Array.from(resources);

    for (let resource of list) {
        console.log(`${resource[0]} -> ${resource[1]}`)
    }
}

aMinerTast([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);
console.log("---------------");
aMinerTast([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);