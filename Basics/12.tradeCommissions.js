function tradeCommissions(input) {
    let city = input[0];
    let trades = Number(input[1]);
    let commissions = 0;

    switch (city) {
        case "Sofia":
            if(trades >= 0 && trades <= 500) {
                commissions += 0.95;
                console.log((trades * commissions).toFixed(2));
            }
    }
}

tradeCommissions(["Sofia", "500"])