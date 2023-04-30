function magicSum(arr, num) {
    let pairs = "";

    for (let i = 0; i < arr.length; i++) {
        for (let i2 = i + 1; i2 < arr.length; i2++) {
            if ((arr[i] + arr[i2]) === num) {
                pairs += `${arr[i]} ${arr[i2]}\n`;
            }
        }
    }
    console.log(pairs);
}
magicSum([1, 2, 3, 4, 5, 6],
    6
);