function rentACar(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let carClass = "";
    let carType = "";
    let price = 0;

    if (budget <= 100) {
        carClass += "Economy class";
            switch (season) {
                case "Summer":
                    carType += "Cabrio";
                    price = budget * 0.35;
                    break;
                case "Winter":
                    carType += "Jeep";
                    price = budget * 0.65;
                    break;
            }
    }else if (budget <= 500) {
        carClass += "Compact class";
            switch (season) {
                case "Summer":
                    carType += "Cabrio";
                    price = budget * 0.45;
                    break;
                case "Winter":
                    carType += "Jeep";
                    price = budget * 0.80;
                    break;
            }
    }else {
        carClass += "Luxury class";
        carType += "Jeep";
        price = budget * 0.90;
    }

    console.log(`${carClass}`);
    console.log(`${carType} - ${price.toFixed(2)}`)
}

rentACar(["70.50", "Winter"])