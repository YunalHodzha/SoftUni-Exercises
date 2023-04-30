function profit(input) {
    let company = input[0];
    let adultTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let adultPrice = Number(input[3]);
    let taxes = Number(input[4]);

    let kidsPrice = adultPrice * 0.30;
    
    let totalSum = ((kidsPrice + taxes) * kidsTickets) + ((adultPrice + taxes) * adultTickets);
    let profit = totalSum * 0.20;

    console.log(`The profit of your agency from ${company} tickets is ${profit.toFixed(2)} lv.`)
}

profit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])

