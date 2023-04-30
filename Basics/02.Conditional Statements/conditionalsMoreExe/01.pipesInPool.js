function poolTask(input) {
    let poolVolume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let workerLeftTime = Number(input[3]);

    let p1h3 = p1 * workerLeftTime;
    let p2h3 = p2 * workerLeftTime;
    let pTotal = p1h3 + p2h3;

    if (poolVolume >= pTotal) {
        let poolFilled = (pTotal / poolVolume) * 100;
        let p1percent = (p1h3 / pTotal) * 100;
        let p2percent = (p2h3 / pTotal) * 100;
        console.log(`The pool is ${(poolFilled).toFixed(2)}% full. Pipe 1: ${(p1percent).toFixed(2)}%. Pipe 2: ${(p2percent).toFixed(2)}%.`)
    } else {
        let litresExceeded = (pTotal - poolVolume).toFixed(2);
        console.log(`For ${(workerLeftTime).toFixed(2)} hours the pool overflows with ${litresExceeded} liters.`)
    }
}

poolTask(["100", "100", "100", "2.5"])