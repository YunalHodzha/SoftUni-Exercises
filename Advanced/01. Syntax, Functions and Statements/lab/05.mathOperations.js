function operations(num1, num2, operator) {
    let result = String(num1 + operator + num2);
    console.log(eval(result));
}

operations(5, 6, '+' );
console.log("--------------");
operations(3, 5.5, '*' );