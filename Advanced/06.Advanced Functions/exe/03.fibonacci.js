function solve() {
    num1 = 1;
    num2 = 0;

    return function ()  {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        return sum;
    }
}

let fib = solve();
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
