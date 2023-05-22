function lowestPrices(arr) {
    let obj = {}
    for(let data of arr) {
        let [town, product, price] = data.split(" | ");
        price = Number(price);

        if(!obj[product]) {
            obj[product] = {};
        }

        obj[product][town] = price;
    }
    
    for(const [product, towns] of Object.entries(obj)) {
        const sorted = Object.entries(towns).sort((a, b) => a[1] - b[1]);

        const [town, price] = sorted[0];
        console.log(`${product} -> ${price} (${town})`);
    }
}

lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
