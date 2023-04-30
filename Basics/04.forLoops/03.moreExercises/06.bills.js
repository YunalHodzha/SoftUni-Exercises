function bills(input) {
    let period = Number(input[0]);
    
    let electricityBill = 0;
    let waterBill = 20;
    let internetBill = 15;
    let others = 0;

    for ( i=1; i<=period; i++) {
        electricityBill += Number(input[i]);
        others += (Number(input[i]) + waterBill + internetBill) * 1.20;
    }
    let average = (electricityBill + (waterBill * period) + (internetBill * period) + others) / period;

    console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
    console.log(`Water: ${(waterBill * period).toFixed(2)} lv`);
    console.log(`Internet: ${(internetBill * period).toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`)
    console.log(`Average: ${average.toFixed(2)} lv`)
}

bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"])
