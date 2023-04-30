function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let trip = "";
    let cost = 0;


    if (budget <= 100) {
        destination += "Bulgaria";
        switch (season) {
            case "summer":
                trip = "Camp";
                cost = budget * 0.30;
                break;
            case "winter":
                trip = "Hotel";
                cost = budget * 0.70;
                break;
        }            
    }else if (budget <= 1000) {
        destination += "Balkans";
        switch (season) {
            case "summer":
                trip = "Camp";
                cost = budget * 0.40;
                break;
            case "winter":
                trip = "Hotel";
                cost = budget * 0.80;
                break;
        }
    }else {
        destination = "Europe";
        trip = "Hotel";
        cost = budget * 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${trip} - ${cost.toFixed(2)}`)
}

journey(["1500", "summer"])