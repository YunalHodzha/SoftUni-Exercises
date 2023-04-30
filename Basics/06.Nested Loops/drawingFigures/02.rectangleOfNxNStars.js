function rectangle(input) {
    let n = Number(input[0]);
    let figure = "";

    for (let i = 1; i <= n; i++) {
        for (let i2 = 1; i2 <= n; i2++) {
            figure += `*`;
            if (i2 == n) {
                figure += `\n`
            }
        }
    }
    console.log(figure)
}

rectangle(["4"])