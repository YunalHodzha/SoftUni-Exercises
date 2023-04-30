function solve(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;

    for (let first = firstNum; first <= secondNum; first++) {
        for (let second = firstNum; second <= secondNum; second++) {
            counter++;
            if (first + second === magicNum) {
                console.log(`Combination N:${counter} (${first} + ${second} = ${magicNum})`);
                return;
            }
        }
    }
    console.log(`${counter} combinations - neither equals ${magicNum}`)

}

solve(["88", "888", "2000"])
