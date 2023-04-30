function storage(arr) {
    let map = new Map();

    for (let info of arr) {
        let [name, value] = info.split(" ");
        value = Number(value);

        if (!map.has(name)) {
            map.set(name, +value);
        } else {
            let currentValue = map.get(name);
            let newValue = currentValue += value;
            map.set(name, newValue);
        }
    }

    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
console.log("----------");
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);