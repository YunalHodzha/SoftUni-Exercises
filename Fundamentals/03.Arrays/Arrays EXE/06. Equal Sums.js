function equalSum(arr) {
    let leftSide = 0;
    let isEqual = false;
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        leftSide += arr[i];
        let currentRightSum = 0;
        for (let i2 = i + 2; i2 < arr.length; i2++) {
            currentRightSum += arr[i2];
        }
        if (leftSide === currentRightSum) {
            isEqual = true;
            index = i + 1;
            break;
        } else if (arr.length == 1) {
            isEqual = true;
            break;
        }
    }
    if (isEqual == true) {
        console.log(index);
    } else {
        console.log("no");
    }
}

equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);