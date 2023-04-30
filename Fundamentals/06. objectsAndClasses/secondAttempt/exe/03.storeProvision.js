function storeProvision(stocked, ordered) {
    let stock = {};

    for (let i = 0; i < stocked.length; i += 2) {
        let name = stocked[i];
        let quantity = Number(stocked[i + 1]);

        stock[name] = quantity;

    }

    for (let i = 0; i < ordered.length; i += 2) {
        let name = ordered[i];
        let quantity = Number(ordered[i + 1]);

        if ([name] in stock) {
            stock[name] += quantity;
        } else {
            stock[name] = quantity;
        }
    }

    for (let item of Object.entries(stock)) {
        console.log(`${item[0]} -> ${item[1]}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
console.log("---------------");
storeProvision(
    ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);