function bombNumber(arr, bombCommand) {
    let bombPower = bombCommand[1];
    let bombNumber = bombCommand[0];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (element === bombNumber) {
            let index = arr.indexOf(element);
            arr.splice(Math.max(0, index - bombPower), ((bombPower * 2) + 1))
            i=0
        }
    }
    console.log(arr.reduce((sum, num) => sum += num, 0));
}

bombNumber([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])
console.log("---------");
bombNumber([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)
console.log("---------");
bombNumber([1, 7, 7, 1, 2, 3],
    [7, 1]
)
console.log("---------");
bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
)