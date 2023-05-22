function storeCatalogue(arr) {
    let list = {};

    for (let data of arr) {
        let [item, price] = data.split(" : ");
        price = Number(price);

        list[item] = price;
    }

    let sorted = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));

    
    let oldLetter = undefined;
    for(let item of sorted) {
        let letter = item[0][0];
        if(letter !== oldLetter) {
            console.log(letter);
            oldLetter = letter;
        }
        console.log(`  ${item[0]}: ${item[1]}`);
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
console.log("---------------");
storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
)