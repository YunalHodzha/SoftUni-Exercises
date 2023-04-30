function reportSystem(input) {
    let index = 0;
    let sumNeeded = Number(input[index]);
    index++;

    let sumCollected = 0;
    let cashPayment = true;
    let cardPayment = false;

    let cashSum = 0;
    let cashCounter = 0
    let cardSum = 0;
    let cardCounter = 0;

    while (input[index] !== "End") {
        let payment = Number(input[index]);
        if (cashPayment == true) {
            if ( payment > 100) {
                console.log("Error in transaction!");
            } else {
                sumCollected += payment;
                cashSum += payment;
                cashCounter++;
                console.log("Product sold!");
            }
            cashPayment = false;
            cardPayment = true;
            index++;
        } else if (cardPayment == true) {
            if( payment < 10) {
                console.log("Error in transaction!");
            } else {
                sumCollected += payment;
                cardSum += payment;
                cardCounter ++;
                console.log("Product sold!");
            }
            cashPayment = true;
            cardPayment = false;
            index++;
        }
        if (sumCollected >= sumNeeded) {
            let cashAvg = cashSum / cashCounter;
            let cardAvg = cardSum / cardCounter;
            console.log(`Average CS: ${cashAvg.toFixed(2)}`);
            console.log(`Average CC: ${cardAvg.toFixed(2)}`);
            return;
        }
    }
    console.log(`Failed to collect required money for charity.`)
}

reportSystem(["600", "86", "150" ,"98", "227", "End"])