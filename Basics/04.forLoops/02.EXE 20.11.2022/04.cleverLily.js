function lili(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let moneySaved = 0;

    for( i=1; i<= age; i++) {
        if (i % 2 === 0) {
            moneySaved += (i *5 -1);
        }else if (i % 2 !== 0) {
            moneySaved += singleToyPrice;
        }
    }

    if(moneySaved >= washingMachinePrice) {
        let moneyLeft = moneySaved - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)
    }else {
        let moneyNeeded = washingMachinePrice - moneySaved;
        console.log(`No! ${moneyNeeded.toFixed(2)}`)
    } 
}



lili(["21",
"1570.98",
"3"])

