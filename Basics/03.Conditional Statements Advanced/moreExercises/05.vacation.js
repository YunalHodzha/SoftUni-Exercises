function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let destination = "";
    let typeHoliday = "";
    
    if (budget <= 1000) {
        typeHoliday += "Camp";
            switch (season) {
                case "Summer":
                    destination += "Alaska";
                    price = budget * 0.65;
                    break;
                case "Winter":
                    destination += "Morocco";
                    price = budget * 0.45;
                    break;
            }
    }else if (budget <= 3000) {
        typeHoliday += "Hut";
        switch (season) {
            case "Summer":
                destination += "Alaska";
                price = budget * 0.80;
                break;
            case "Winter":
                destination += "Morocco";
                price = budget * 0.60;
                break;
        }
    }else {
        typeHoliday += "Hotel";
        switch (season) {
            case "Summer":
                destination += "Alaska";
                price = budget * 0.90;
                break;
            case "Winter":
                destination += "Morocco";
                price = budget * 0.90;
                break;
        }
    }
    console.log(`${destination} - ${typeHoliday} - ${price.toFixed(2)}`)
}

vacation(["2543.99", "Winter"])