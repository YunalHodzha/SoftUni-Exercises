function averageNumber(input) {
    let n = Number(input[0]);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += Number(input[i]);
    }
    let avgNum = sum / n;
    console.log(avgNum.toFixed(2))
}

averageNumber(["4", "95", "23", "76", "23"])