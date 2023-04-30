function theImitationGame(input) {
    let code = input.shift();

    for (let el of input) {
        if (el === "Decode") {
            console.log(`The decrypted message is: ${code}`);
        }
        let data = el.split("|");
        let action = data.shift();

        if (action === "Move") {
            let sliced = code.substring(0, data[0]);
            code = code.substring(data[0]);
            code += sliced;
        } else if (action === "Insert") {
            let sliced = code.slice(0, data[0]) + data[1];
            let sliced2 = code.slice(data[0])
            code = sliced + sliced2;
        } else if (action === "ChangeAll") {
            let substring = data[0];
            let replacement = data[1]
            let replaced = "";
            for (let ch of code) {
                if (ch === substring) {
                    replaced += replacement;
                } else {
                    replaced += ch;
                }
            }
            code = replaced;
        }
    }
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
);
console.log("--------------");
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',])