function calculator(num1, num2, operator) {
    let calculate = (num1, num2, operator) => ({
        "multiply": () => num1 * num2,
        "divide": () => num1 / num2,
        "add": () => num1 + num2,
        "subtract": () => num1 - num2
    })[operator]();
    return calculate;
}

calculator(5, 5, "multiply");