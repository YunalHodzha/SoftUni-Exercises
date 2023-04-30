function solve(arr) {
    let myArr = arr[0]
        .split(" ")
        .map(a => a = Number(a));

    for (i = 1; i < arr.length; i++) {
        let command = arr[i].split(" ");
        let number = Number(command[1]);

        switch (command[0]) {
            case "Add":
                myArr.push(number);
                break;
            case "Remove":
                myArr = myArr.filter(a => a !== number);
                break;
            case "RemoveAt":
                myArr.splice(number, 1);
                break;
            case "Insert":
                let index = command[2];
                myArr.splice(index, 0, number);
                break;
        }
    }
    console.log(myArr.join(" "));
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
console.log("-----------");
solve(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
)