function sumOfTwoNumbers(input) {
    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let isFound = false;


    for (let i = firstNumber; i<= lastNumber; i++ ) {
        if (isFound) {
            break;
        }
        for ( let i2 = firstNumber; i2 <= lastNumber; i2++) {
            counter++;
            if (i + i2 === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${i2} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }

}

sumOfTwoNumbers(["88", "888", "2000"])