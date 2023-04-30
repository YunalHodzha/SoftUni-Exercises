function maxNumber(arr) {
    let newarr = [];
    let currentNum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentNum = arr[i];
        for (let i2 = i + 1; i2 < arr.length; i2++) {
            if (currentNum < arr[i2]) {
                currentNum = arr[i2];
                i = i2;
            }
        }
        if (arr[i] === arr[i + 1]) {
            continue;
        }
        newarr.push(currentNum);
    }

    console.log(newarr.join(" "))
}

maxNumber([14, 24, 3, 19, 15, 17]);