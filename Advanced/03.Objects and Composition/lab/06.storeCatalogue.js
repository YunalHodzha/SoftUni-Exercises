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