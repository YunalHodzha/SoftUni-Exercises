function solve(arr) {
    let bunker = [];
    let isTrue = true;


    for (let i = 0; i < arr.length; i++) {
        let currentInput = arr[i];


        if (typeof currentInput === "number") {
            bunker.push(currentInput);
        } else {
            if (i === arr.length - 1 && bunker.length > 2) {
                console.log("Error: too many operands!");
                isTrue = false;
                return;
            }

            if (bunker.length <= 1) {
                console.log("Error: not enough operands!");
                isTrue = false;
                return;
            } else {
                let b = bunker.pop();
                let a = bunker.pop();
                let operand = currentInput;

                let result = 0;
                result = eval(a + operand + b);
                bunker.push(result);
            }


        }
    }

    if (isTrue === true) {
        console.log(bunker[0]);
    } else if (bunker.length >= 2) {
        console.log("Error: too many operands!");
    }
}

solve([
    3,
    4,
    '+']);
console.log("--------");
solve([
    5,
    3,
    4,
    '*',
    '-']);
console.log("--------");
solve([
    7,
    33,
    8,
    '-']);
console.log("--------");
solve([
    15,
    '/']);
console.log("--------");
solve([
    31,
    2,
    '+',
    11,
    '/']);
console.log("--------");
solve([
    -1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);
