function pinCodes(input) {
    let firsNumMax = Number(input[0]);
    let secondNumMax = Number(input[1]);
    let thirdNumMax = Number(input[2]);

    for (let first = 2; first <= firsNumMax; first++) {

        for (let i = 2; i <= secondNumMax; i++) {
            let flag = 0;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && flag == 0) {
                for (let third = 2; third <= thirdNumMax; third++) {
                    if (first % 2 === 0 && third % 2 === 0) {
                        console.log(`${first} ${i} ${third}`);
                    }
                }
            }
        }
    }
}
pinCodes(["3", "5", "5"])

// if(first % 2 === 0 && third % 2 === 0) {
//     console.log(`${first} ${second} ${third}`);
// }