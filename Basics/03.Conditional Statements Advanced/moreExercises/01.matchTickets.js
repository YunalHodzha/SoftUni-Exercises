function matchTickets(input) {
    let budget = Number(input[0]);
    let vipOrNormal = input[1];
    let personCount = Number(input[2]);

    let vipPrice = 499.99;
    let normalPrice = 249.99;
    let totalCost = 0;

    if (personCount <= 4) {
        budget *= 0.25;
    }else if (personCount <= 9) {
        budget *= 0.40;
    }else if (personCount <= 24) {
        budget *= 0.50;
    }else if (personCount <= 49) {
        budget *= 0.60;
    }else {
        budget *= 0.75;
    }

    switch (vipOrNormal) {
        case "VIP":
            totalCost = (personCount * vipPrice);
            if (budget > totalCost ) {
                let moneyLeft = budget - totalCost;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            }else {
                let moneyNeeded = totalCost - budget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
            }
            break;
        case "Normal":
            totalCost = (personCount * normalPrice);
            if (budget > totalCost ) {
                let moneyLeft = budget - totalCost;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            }else {
                let moneyNeeded = totalCost - budget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
            }
    }
}

matchTickets(["30000", "VIP", "49"])