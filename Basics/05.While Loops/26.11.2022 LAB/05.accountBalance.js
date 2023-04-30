function accountBallance(input) {
    let index = 0;
    let money = input[index];
    let total = 0;

    while(input[index] !== "NoMoreMoney") {
            if(input[index] < 0) {
                console.log("Invalid operation!")
                break;
            } 
        money = Number(input[index]);
        total = total + money;
        console.log(`Increase: ${money.toFixed(2)}`);
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

accountBallance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])


