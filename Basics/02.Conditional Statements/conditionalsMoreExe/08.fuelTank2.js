function fuelTank(input) {
    let fuelType = input[0];
    let litres = Number(input[1]);
    let clubCard = input[2];

    let gasolinePrice = 2.22;
    let dieselPrice = 2.33
    let gasPrice = 0.93;
    
    if (clubCard === "Yes") {       
        gasolinePrice = 2.22 - 0.18;       
        dieselPrice = 2.33 - 0.12;
        gasPrice = 0.93 - 0.08;       
    }

    if (fuelType === "Gasoline") {
        if (litres > 20 && litres <= 25) {
            gasolinePrice = gasolinePrice * 0.92;
            finalPrice = gasolinePrice * litres;
            console.log(`${(finalPrice).toFixed(2)} lv.`);
        } else if (litres > 25) {
            gasolinePrice = gasolinePrice * 0.90;
            finalPrice = gasolinePrice * litres;
            console.log(`${(finalPrice).toFixed(2)} lv.`);
        } else {
            finalPrice = gasolinePrice * litres;
            console.log(`${(finalPrice).toFixed(2)} lv.`);
        }
    } else if (fuelType === "Diesel") {
        if (litres > 20 && litres <= 25) {
            dieselPrice = dieselPrice * 0.92;
            finalPrice = dieselPrice * litres;
            console.log(`${(finalPrice).toFixed(2)} lv.`);
        } else if (litres > 25) {
            dieselPrice = dieselPrice * 0.90;
            finalPrice = dieselPrice * litres;
            console.log(`${(finalPrice).toFixed(2)} lv.`);
        } else {
            finalPrice = dieselPrice * litres;
            console.log(`${(finalPrice).toFixed(2)} lv.`);
        }
    } else if (fuelType === "Gas") {
        if (litres > 20 && litres <= 25) {
            gasPrice = gasPrice * 0.92;
            finalPrice = gasPrice * litres;
            console.log(`${(finalPrice).toFixed(2)} lv.`);
        } else if (litres > 25) {
            gasPrice = gasPrice * 0.90;
            finalPrice = gasPrice * litres;
            console.log(`${(finalPrice).toFixed(2)} lv.`);
        }else {
            finalPrice = gasPrice * litres;
            console.log(`${(finalPrice).toFixed(2)} lv.`);
        }
    }
}

fuelTank(["Gas", "30", "Yes"])