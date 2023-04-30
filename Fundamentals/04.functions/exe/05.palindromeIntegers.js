function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentNum = String(arr[i]);
        let reversedNum = "";
        for (let j = currentNum.length - 1; j >= 0; j--) {
            reversedNum += currentNum[j];
        }
        if (currentNum === reversedNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([32, 2, 232, 1010]);