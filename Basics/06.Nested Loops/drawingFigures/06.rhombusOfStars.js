function rhombus(input) {
    let n = Number(input[0]);

    let figure = "";

    for(let i = 1; i <= n; i++ ) {
        figure += " ".repeat(n-i);
        figure += "*";
        figure += " *".repeat(i-1);
        figure += `\n`;
    }
    for(let i2 = n-1; i2 >= 1; i2--) {
        figure += " ".repeat(n-i2);
        figure += "*";
        figure += " *".repeat(i2-1);
        figure += '\n';
    }
    console.log(figure)
}

rhombus(["5"])