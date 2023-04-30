function garage(arr) {
    let garages = {};

    for(let line of arr) {
        let info = line.split(" - ");
        let number = info.shift();
        info = String(info)

        let info2 = info.split(", ");
        for(let el of info2) {
            let [key, value] = el.split(": ");
            console.log(key)
            console.log(value)
        }

        console.log(info)
        console.log(number)
    }
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
console.log("-----------------");
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'])