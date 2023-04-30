function shopping(input) {
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuPrice = gpuCount * 250;
    let cpuPrice = (gpuPrice * 0.35) * cpuCount;
    let ramPrice = (gpuPrice * 0.10) * ramCount;

    let totalPrice = (gpuPrice + cpuPrice + ramPrice);

    if(gpuCount > cpuCount) {
        totalPrice = (totalPrice * 0.85);
    }   

    if (budget >= totalPrice) {
        let moneyLeft = (budget - totalPrice).toFixed(2);
        console.log(`You have ${moneyLeft} leva left!`);
    } else if (budget < totalPrice) {
        let moneyNeeded = (totalPrice - budget).toFixed(2);
        console.log(`Not enough money! You need ${moneyNeeded} leva more!`);
    }
}

shopping(["920.45",
"3",
"1",
"1"])


