function computerStore(arr) {
    let priceWithoutTaxes = 0;
    let taxes = 0;
    let customer = "";
    let totalPrice = 0;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "special" || arr[i] === "regular") {
            customer = arr[i];
            break;
        }
        let currentPrice = Number(arr[i]);
        if (currentPrice < 0) {
            console.log("Invalid price!");
            continue;
        }
        priceWithoutTaxes += currentPrice;
        taxes += currentPrice * 0.20;
    }

    totalPrice = priceWithoutTaxes + taxes;
    if (customer === "special") {
        totalPrice = totalPrice * 0.90;
    }

    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}

computerStore(['regular'])