function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositPeriodMonths = Number(input[1]);
    let yearlyInterest = Number(input[2]) / 100;
    let finalSum = depositSum + depositPeriodMonths * ((depositSum * yearlyInterest) / 12);

    console.log(finalSum);
}

depositCalculator(["2350","6","7"])