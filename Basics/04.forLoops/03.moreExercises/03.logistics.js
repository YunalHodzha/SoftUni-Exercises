function logistics(input) {
    let totalCargo = Number(input[0]);

    let totalWeight = 0;
    let busCargo = 0;
    let truckCargo = 0;
    let trainCargo = 0;

    for( let i=1; i <= totalCargo; i++) {
        if( input[i] <= 3) {
            busCargo += Number(input[i]);
            totalWeight += Number(input[i]);
        }else if (input[i] >= 4 && input[i] <= 11) {
            truckCargo += Number(input[i]);
            totalWeight += Number(input[i]);
        }else if (input[i] >= 12) {
            trainCargo += Number(input[i]);
            totalWeight += Number(input[i]);
        }
    }

    let averageCargoPrice = (busCargo * 200 + truckCargo * 175 + trainCargo * 120) /totalWeight;
    let busPercentage = (busCargo / totalWeight) *100;
    let truckPercentage = (truckCargo / totalWeight) *100;
    let trainPercentage = (trainCargo / totalWeight) *100;
    console.log(`${averageCargoPrice.toFixed(2)}\n${busPercentage.toFixed(2)}%\n${truckPercentage.toFixed(2)}%\n${trainPercentage.toFixed(2)}%`);

}


logistics(["5", "2", "10", "20","1", "7"])