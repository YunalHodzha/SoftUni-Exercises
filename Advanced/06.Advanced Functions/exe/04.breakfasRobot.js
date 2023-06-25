function solution() {

    const library = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    const storedElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    function manager(str) {
        let [command, item, quantity] = str.split(" ");
        quantity = Number(quantity);

        if (command === "prepare") {
            let recipe = library[item];
            for (const el in recipe) {
                if (recipe[el] * quantity > storedElements[el]) {
                    return `Error: not enough ${el} in stock`;
                }
            }
            for (const el in recipe) {
                storedElements[el] -= recipe[el] * quantity;
            }
            return "Success";
        } else if (command === "restock") {
            storedElements[item] += quantity;
            return `Success`;
        } else if (command === "report") {
            let result = [];
            for (element in storedElements) {
                result.push(`${element}=${storedElements[element]}`);
            }
            return result.join(" ");
        }
    }
    return manager;
}


let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

