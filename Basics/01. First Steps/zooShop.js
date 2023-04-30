function totalFoodPrice(input) {
    let dogFoodAmount = input[0];
    let catFoodAmount = input[1];
    let dogFoodPrice = Number(2.50);
    let catFoodPrice = Number(4);
    let foodprice = (dogFoodAmount * dogFoodPrice) + (catFoodAmount * catFoodPrice);

    console.log(`${foodprice} lv.`)
}

totalFoodPrice(["13","9"])