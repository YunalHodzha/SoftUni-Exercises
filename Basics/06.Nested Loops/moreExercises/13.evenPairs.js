function evenPairs(input) {
    let aStart = Number(input[0]);
    let bStart = Number(input[1]);
    let aEnd = aStart + Number(input[2]);
    let bEnd = bStart + Number(input[3]);

    for (let i = aStart; i <= aEnd; i++) {
        for (let i2 = bStart; i2 <= bEnd; i2++) {
            let isPrime2 = false;
            let isPrime = false;
            for (j = 2; j <= i; j++) {
                if (i % j === 0 && j !== i) {
                    isPrime = true;
                    break;
                }
            }
            for (j2 = 2; j2 <= i2; j2++) {
                if (i2 % j2 === 0 && j2 !== i2) {
                    isPrime2 = true;
                    break;
                }
            }
            if (isPrime === false && isPrime2 === false) {
                console.log(`${i}${i2}`)
            }
        }
    }
}

evenPairs(["10", "30", "9", "6"])