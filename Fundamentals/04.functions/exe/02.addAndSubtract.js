function addAndSubtract(num1, num2, num3) {
    let finalSum = 0;
    sum(num1, num2);
    subtract(sum, num3);

    function sum(num1, num2) {
        return sum = num1 + num2;
    }

    function subtract(sum, num3) {
        return finalSum = sum - num3;
    }
    return finalSum;
}

addAndSubtract(23, 6, 10)