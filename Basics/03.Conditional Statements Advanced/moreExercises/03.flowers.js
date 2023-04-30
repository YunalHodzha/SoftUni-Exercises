   function flowers(input) {
    let hrizantemaCount = Number(input[0]);
    let roseCount = Number(input[1]);
    let laleCount = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let hrizantemaPrice = 0;
    let rosePrice = 0;
    let lalePrice = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            hrizantemaPrice += 2.00 ;
            rosePrice += 4.10;
            lalePrice += 2.50;
            break;
        case "Autumn":
        case "Winter":
            hrizantemaPrice += 3.75;
            rosePrice += 4.50;
            lalePrice += 4.15;
            break;
    }

    switch (holiday) {
        case "Y":
            hrizantemaPrice *= 1.15;
            rosePrice *= 1.15;
            lalePrice *= 1.15;
            break;
    }

    let bouquetPrice = (hrizantemaPrice * hrizantemaCount) + (rosePrice * roseCount) + (lalePrice * laleCount);

    if (laleCount > 7 && season === "Spring") {
        bouquetPrice *= 0.95;
    }
    if (roseCount >= 10 && season === "Winter") {
        bouquetPrice *= 0.90;
    }
    if((roseCount + hrizantemaCount + laleCount) > 20) {
        bouquetPrice *= 0.80;
    }
    bouquetPrice += 2;
    console.log(bouquetPrice.toFixed(2))
}

flowers(["10", "10", "10", "Autumn", "N"])