function add(num) {
    let sum = 0;
    sum += num;

    function calc(anotherNum) {
        sum += anotherNum;
        return calc;
    }
    
    calc.toString = () => sum;
    return calc;
}

add(1);
console.log("--------------");
console.log(add(1)(6)(-3).toString())