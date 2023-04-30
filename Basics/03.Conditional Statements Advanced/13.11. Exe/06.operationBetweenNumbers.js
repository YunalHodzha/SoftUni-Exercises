function operations(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];
    let sum = 0;


    switch (operator) {
        case "+":
            sum = N1 + N2;
            if (sum % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${sum} - even`);
            }else {
                console.log(`${N1} ${operator} ${N2} = ${sum} - odd`);
            }
            break;
        case "-":
            sum = N1 - N2;
            if (sum % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${sum} - even`);
            }else {
                console.log(`${N1} ${operator} ${N2} = ${sum} - odd`);
            }
            break;
        case "*":
            sum = N1 * N2;
            if (sum % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${sum} - even`);
            }else {
                console.log(`${N1} ${operator} ${N2} = ${sum} - odd`);
            }
            break;
        case "/":
            if (N2 === 0){
                console.log(`Cannot divide ${N1} by zero`);
            }else {
            sum = N1 / N2;
            console.log(`${N1} ${operator} ${N2} = ${sum.toFixed(2)}`);
            } break;
        case "%":
            if (N2 === 0){
                console.log(`Cannot divide ${N1} by zero`);
            }else {
            sum = N1 % N2;
            console.log(`${N1} ${operator} ${N2} = ${sum}`);
            }
            break;
    }
}
operations(["10",
"0",
"%"])





