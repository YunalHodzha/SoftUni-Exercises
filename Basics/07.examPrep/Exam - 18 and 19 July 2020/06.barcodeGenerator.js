function barcodeGenerator(input) {

    let startNum = input[0];
    let endNum = input[1];

    let result = "";

    for (let firstNum = Number(startNum[0]); firstNum <= Number(endNum[0]); firstNum++) {
        if (firstNum % 2 === 0) {
            continue;
        }
        for (let secondNum = Number(startNum[1]); secondNum <= Number(endNum[1]); secondNum++) {
            if (secondNum % 2 === 0) {
                continue;
            }
            for (let thirdNum = Number(startNum[2]); thirdNum <= Number(endNum[2]); thirdNum++) {
                if (thirdNum % 2 === 0) {
                    continue;
                }
                for (let fourthNum = Number(startNum[3]); fourthNum <= Number(endNum[3]); fourthNum++) {
                    if (fourthNum % 2 === 0) {
                        continue;
                    } else {
                        result += `${firstNum}${secondNum}${thirdNum}${fourthNum} `;
                    }
                }
            }
        }
    }
    console.log(result)
}

barcodeGenerator([
    "1365",
    "5877"
])
