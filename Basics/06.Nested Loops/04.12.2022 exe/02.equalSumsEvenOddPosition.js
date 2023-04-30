function solve(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = "";

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        let currentNumStr = currentNum.toString();
        let oddSum = 0;
        let evenSum = 0;

        for (let index = 0; index < currentNumStr.length; index++) {
            let currentDigit = Number(currentNumStr[index]);
            let position = index + 1;
            if (position % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            result += `${currentNum} `;
        }
    }
    console.log(result);
}

solve(["100000",
    "100050"])