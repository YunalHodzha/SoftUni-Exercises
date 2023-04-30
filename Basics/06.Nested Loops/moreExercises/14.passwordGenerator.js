function passwordGenerator(input) {
    let n = Number(input[0]);
    let L = Number(input[1]);

    let passwords = "";

    for (let i1 = 1; i1 <= n; i1++) {
        for (let i2 = 1; i2 <= n; i2++) {
            for (let i3 = 97; i3 < 97 + L; i3++) {
                let a1 = String.fromCharCode(i3);
                for (let i4 = 97; i4 < 97 + L; i4++) {
                    let a2 = String.fromCharCode(i4);
                    for (let i5 = 1; i5 <= n; i5++) {
                        if (i5 > i1 && i5 > i2) {
                            passwords += `${i1}${i2}${a1}${a2}${i5} `
                        }
                    }
                }
            }
        }
    }
    console.log(passwords)
}

passwordGenerator(["4", "2"])