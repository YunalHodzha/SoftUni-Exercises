function solve(arr) {
    let cars = new Map();

    for (let line of arr) {
        let [brand, model, quantity] = line.split(" | ");
        quantity = Number(quantity);

        if (!cars.has(brand)) {
            cars.set(brand, new Map());
            cars.get(brand).set(model, quantity);
        } else if (!cars.get(brand).has(model)) {
            cars.get(brand).set(model, quantity);
        } else {
            let currentQnt = cars.get(brand).get(model)
            cars.get(brand).set(model, (currentQnt + quantity));
        }
    }

    for(let [key,value] of cars) {
        console.log(key);
        
        let brands = value;
        for(let [key, value] of brands) {
            console.log(`###${key} -> ${value}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);