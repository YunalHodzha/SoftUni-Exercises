function softUniBar(arr) {
    let namePattern = /%(?<name>[A-Z][a-z]+)%/;
    let productPattern = /<(?<product>[\w]+)>/;
    let countPattern = /\|(?<count>\d+)\|/;
    let pricePattern = /(?<price>\d*\.*\d*)\$$/;
    let sum = 0;

    for (let line of arr) {
        if (line === "end of shift") {
            break;
        }

        if (namePattern.test(line) === true &&
            productPattern.test(line) === true &&
            countPattern.test(line) === true &&
            pricePattern.test(line) === true) {

            let name = namePattern.exec(line);
            let product = productPattern.exec(line);
            let price = pricePattern.exec(line);
            let count = countPattern.exec(line);
            let currentSum = price.groups.price * count.groups.count;
            sum += currentSum;

            console.log(`${name.groups.name}: ${product.groups.product} - ${currentSum.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${sum.toFixed(2)}`);
}

softUniBar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
console.log("--------------------");
softUniBar(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);