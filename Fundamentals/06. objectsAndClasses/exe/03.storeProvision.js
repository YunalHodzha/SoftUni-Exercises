function storeProvision(stocked, ordered) {
    let stock = {};

    for (let i = 0; i < stocked.length; i += 2) {
        let item = stocked[i];
        let value = Number(stocked[i + 1]);

        stock[item] = value;
    }

    for (let i = 0; i < ordered.length; i += 2) {
        let item = ordered[i];
        let value = Number(ordered[i + 1]);

        if ([item] in stock) {
            stock[item] += value;
        } else {
            stock[item] = value;;
        }
    }

    for(let key of Object.keys(stock)) {
        console.log(`${key} -> ${stock[key]}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
console.log("-------------");
storeProvision(
    ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);