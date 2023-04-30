function tinyHouse(input) {
    let n = Number(input[0]);

    let figure = "";
    let counter = 1;

    for (let i = 1; i <= Math.floor((n + 1) / 2); i++) {
        if (i === 1) {
            if (n % 2 !== 0) {
                figure += "-".repeat((n - 1) / 2);
                figure += "*";
                figure += "-".repeat((n - 1) / 2);
                figure += `\n`;
                counter += 2;
                continue;
            } else {
                figure += "-".repeat((n - 2) / 2);
                figure += "*".repeat(2);
                figure += "-".repeat((n - 2) / 2);
                figure += `\n`;
                counter += 3;
                continue;
            }
        }
        figure += "-".repeat((n - counter) / 2);
        figure += "*".repeat(counter);
        figure += "-".repeat((n - counter) / 2);
        figure += `\n`;
        counter += 2;

    }

    for (let i = 0; i <= Math.floor(n / 2 - 1); i++) {
        figure += "|";
        figure += "*".repeat(n - 2);
        figure += "|";
        figure += '\n';
    }

    console.log(figure)
}

tinyHouse(["12"])