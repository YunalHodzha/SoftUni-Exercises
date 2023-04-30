function totalProfitEuros(input) {
    let vegetablePrices = Number(input[0]);
    let fruitPrices = Number(input[1]);
    let vegetableAmount = Number(input[2]);
    let fruitAmount = Number(input[3]);
    let totalProfit = (vegetablePrices * vegetableAmount) + (fruitPrices * fruitAmount);
    let totalProfitEuros = totalProfit / 1.94;

    console.log(totalProfitEuros.toFixed(2));
}

totalProfitEuros(["0.194", "19.4", "10", "10"])