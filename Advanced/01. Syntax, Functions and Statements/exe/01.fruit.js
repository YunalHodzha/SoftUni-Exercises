function fruits(fruit, grams, price) {
    let kg = grams / 1000;
    let fruitPrice = kg * price;

    console.log(`I need $${fruitPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

fruits('orange', 2500, 1.80);
console.log("----------");
fruits('apple', 1563, 2.35);