function passwordReser(arr) {
    let password = arr.shift();

    for (let line of arr) {
        let data = line.split(" ");
        let command = data.shift();

        if (command === "TakeOdd") {
            let rawPass = "";
            for (let i = 1; i < password.length; i = i + 2) {
                rawPass += password[i];
            }
            password = rawPass;
            console.log(password);
        } else if (command === "Cut") {
            let index = Number(data[0]);
            let length = Number(data[1]);

            let subsrting = password.substring(index, index + length);
            password = password.replace(subsrting, "");
            console.log(password);
        } else if (command === "Substitute") {
            let substring = data[0];
            let substitute = data[1];

            if (password.includes(substring)) {
                while (password.includes(substring)) {
                    password = password.replace(substring, substitute);
                }
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        } else if (command === "Done") {
            console.log(`Your password is: ${password}`);
        }
    }
}

passwordReser(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);
console.log("-------------------")
passwordReser(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);