function arrayModifier(arr) {
    let myArr = arr
        .shift()
        .split(" ")
        .map(Number);

    for (let i = 0; i < arr.length; i++) {
        let currentCommands = arr[i].split(" ");
        let command = currentCommands[0];
        let index1 = Number(currentCommands[1]);
        let index2 = Number(currentCommands[2]);
        let firstEl = myArr[index1];
        let secEl = myArr[index2];

        switch (command) {
            case "swap":
                myArr.splice(index1, 1, secEl);
                myArr.splice(index2, 1, firstEl);
                break;
            case "multiply":
                let multiplied = firstEl * secEl;
                myArr.splice(index1, 1, multiplied);
                break;
            case "decrease":
                myArr = myArr.map(item => item - 1);
                break;
            case "end":
                console.log(myArr.join(", "));
                return
        }
    }
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
console.log("-----------");
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);