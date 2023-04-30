function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);

    let priceForRent = 0;

    switch (season) {
        case "Spring":
            priceForRent += 3000;
            break;
        case "Summer":
        case "Autumn":
            priceForRent += 4200;
            break;
        case "Winter":
            priceForRent += 2600;
            break;
    }

    if (fisherCount <= 6) {
        priceForRent *= 0.90;
    } else if (fisherCount <= 11) {
        priceForRent *= 0.85;
    } else {
        priceForRent *= 0.75;
    }

    if (fisherCount % 2 === 0 && season !== "Autumn") {
        priceForRent *= 0.95;
    }

    if (budget >= priceForRent) {
        let moneyLeft = budget - priceForRent;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = priceForRent - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }
}

fishingBoat(["2000",
"Winter",
"13"])

