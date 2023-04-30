function catalogue(arr) {
    let products = [];

    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = Number(price);
        }
    }

    for(let line of arr) {
        let [name, price] = line.split(" : ");
        let product = new Product(name, price)
        products.push(product)
    }

    let sorted = products.sort((a, b) => a.name.localeCompare(b.name));
    let isLetter = true;
    let oldLetter = undefined;
    for(line of sorted) {
        let letter = line.name[0];
        if(letter !== oldLetter) {
            isLetter = true;
        }
        if(isLetter === true){
        console.log(letter)
        isLetter = false
        }

        console.log(`  ${line.name}: ${line.price}`);
        oldLetter = letter;
    }
}

catalogue(
    ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])
console.log("-------------");
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'])