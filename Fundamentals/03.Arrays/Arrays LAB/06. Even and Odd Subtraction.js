function evenAndOddSub(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    let endSum = evenSum - oddSum;
    console.log(endSum);
}

evenAndOddSub([1, 2, 3, 4, 5, 6])