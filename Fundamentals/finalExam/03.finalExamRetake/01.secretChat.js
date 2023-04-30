function secretChat(arr) {
    let message = arr.shift();

    for (let line of arr) {
        if (line === "Reveal") {
            break;
        }
        let data = line.split(":|:");
        let command = data.shift();

        if (command === "InsertSpace") {
            let index = Number(data[0]);
            message = message.slice(0, index) + " " + message.slice(index);
            console.log(message)
        } else if (command === "Reverse") {
            let str = data[0];
            if (message.includes(str)) {
                let reversed = str.split("").reverse().join("");
                message = message.replace(str, "");
                message = message + reversed
                console.log(message);
            } else {
                console.log(`error`);
            }
        } else if (command === "ChangeAll") {
            let substring = data[0];
            let replacement = data[1];
            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
            console.log(message);
        }
    }
    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gnil',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);
console.log("------------");
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);