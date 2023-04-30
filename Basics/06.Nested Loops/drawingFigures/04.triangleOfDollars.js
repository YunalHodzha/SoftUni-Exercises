function triangle(input) {
    let n = Number(input[0]);
    let currentLine = "";
    let symbol = "$";

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            currentLine += `${symbol} `;
        }
        console.log(currentLine);
        currentLine = "";

    }
}

triangle(["5"])