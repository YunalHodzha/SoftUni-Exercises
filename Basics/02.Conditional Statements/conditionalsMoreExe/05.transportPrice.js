function transport(input) {
    let kmCount = Number(input[0]);
    let time = input[1];

    let taxiDayPrice = 0.79;
    let taxiNightPrice = 0.90;
    let busPrice = 0.09; //20km
    let trainPrice = 0.06; //100km

    if (kmCount < 20) {
        if (time === "day") {
            let taxiCost = (kmCount * 0.79) + 0.70;
            console.log(taxiCost.toFixed(2))
        }else if (time === "night") {
            let taxiCost = (kmCount * 0.90) + 0.70;
            console.log(taxiCost.toFixed(2))
        }
    }
    if (kmCount >= 20 && kmCount < 100) {
        let busCost = kmCount * 0.09;
        console.log(busCost.toFixed(2));
    }
    if (kmCount >= 100) {
        let trainCost = kmCount * 0.06;
        console.log(trainCost.toFixed(2))
    }
}



transport(["5", "day"])