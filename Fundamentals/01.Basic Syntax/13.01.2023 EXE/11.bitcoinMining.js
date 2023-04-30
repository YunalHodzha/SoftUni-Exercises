function bitcoinMining(dailyGoldMined) {
    let bitCoin = 11949.16; //leva
    let oneGramGold = 67.51; //leva

    let bitcoinBought = 0;
    let moneySaved = 0;
    let dayCounter = 1;
    let firstCoinBought = 0;

    for(let i=0; i<dailyGoldMined.length; i++) {
        let currentDay = dailyGoldMined[i] * 67.51;
        if (dayCounter === 3) {
            dailyGoldMined[i] *= 0.70;
            currentDay = dailyGoldMined[i] * 67.51;
            dayCounter = 1;
        }
        
        while (currentDay >= 11949.16) {
            currentDay -= 11949.16;
            bitcoinBought +=1;
            if(bitcoinBought === 1) {
                firstCoinBought = dayCounter;
            }
        }
        dayCounter++;
        moneySaved += currentDay;
    }

    console.log(`Bought bitcoins: ${bitcoinBought}`);
    console.log(`Day of the first purchased bitcoin: ${firstCoinBought}`);
    console.log(`Left money: ${moneySaved.toFixed(2)} lv.`)

}

bitcoinMining([3124.15, 504.212, 2511.124])

