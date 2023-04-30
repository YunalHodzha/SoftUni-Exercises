function numberModification(num) {
    let avgNumberOfInput = 0;
    let strNumber = String(num);
    findAvgNumOfInput(num);

    function findAvgNumOfInput(num) {
        let strNumber = String(num);
        let sum = 0;

        for (let i = 0; i < strNumber.length; i++) {
            sum += Number(strNumber[i]);
        }
        return avgNumberOfInput = sum / strNumber.length;
    }

    while (avgNumberOfInput < 5) {
        strNumber += "9";
        strNumber = Number(strNumber);
        findAvgNumOfInput(strNumber);
    }

    console.log(strNumber);
}

numberModification(101);
console.log("--------");
numberModification(5835);