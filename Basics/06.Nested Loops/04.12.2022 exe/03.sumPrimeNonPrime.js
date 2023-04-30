function primeNotPrime(input) {
    let primeSum = 0;
    let notPrimeSum = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "stop") {
        let currentNum = Number(command);
        if (currentNum < 0) {
            console.log(`Number is negative.`)
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;
        for (let divisor = 2; divisor < currentNum; divisor++) {
            if (currentNum % divisor === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime === true) {
            primeSum += currentNum;
        } else {
            notPrimeSum += currentNum;
        }


        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${notPrimeSum}`)
}

primeNotPrime(["0",
    "-9",
    "0",
    "stop"])


