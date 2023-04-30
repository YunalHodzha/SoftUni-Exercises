function proccess(arr) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.*\d+)!(?<quantity>\d+)/;
    let sum = 0;

    console.log("Bought furniture:")
    for (let line of arr) {
        if (line === "Purchase") {
            break;
        }
        if (pattern.test(line)) {
            let product = pattern.exec(line);

            let name = product.groups.name;
            let price = Number(product.groups.price) * Number(product.groups.quantity);
            sum += price;
            console.log(name);
        }
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

proccess(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
console.log("-----------");
proccess(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);
console.log("-----------");
proccess(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']);