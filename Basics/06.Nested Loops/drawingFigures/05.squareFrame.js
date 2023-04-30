function squareFrame(input) {
    let n = Number(input[0]);

    let plus = "+";
    let minus = "- ";

    let border = `${plus} ${minus.repeat(n - 2)}${plus}`;
    let body = `${border}\n`;

    for (i = 1; i <= n - 2; i++) {
        body += `| ${minus.repeat(n - 2)}|\n`;
    }
    body += `${border}`;
    console.log(`${body}`);
}

squareFrame(["6"])