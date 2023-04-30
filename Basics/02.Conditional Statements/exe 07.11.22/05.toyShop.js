function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);
    
    let totalToysPrice = (puzzleCount * 2.60) + (dollCount * 3) + (bearCount * 4.10) + (minionCount * 8.20) + (truckCount * 2);
    let totalToysCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    
     if (totalToysCount >= 50) {
         totalToysPrice = totalToysPrice * 0.75; 
    }
    totalToysPrice = totalToysPrice * 0.90;

     if (totalToysPrice >= tripPrice) {
        let moneyLeft = (totalToysPrice - tripPrice).toFixed(2);
         console.log(`Yes! ${moneyLeft} lv left.`);
     } else {
         let moneyNeeded = (tripPrice - totalToysPrice).toFixed(2);
         console.log(`Not enough money! ${moneyNeeded} lv needed.`)
     }

}


toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

