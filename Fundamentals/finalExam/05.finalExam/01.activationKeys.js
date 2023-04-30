function activationKeys(arr) {
    let rawKey = arr.shift();


    for (let line of arr) {
        let data = line.split(">>>");
        let command = data.shift();

        if (command === "Contains") {
            let substring = data[0];
            if (rawKey.includes(substring)) {
                console.log(`${rawKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (command === "Flip") {
            let case_ = data[0];
            let startIndex = Number(data[1]);
            let endIndex = Number(data[2]);
            let substring = rawKey.slice(startIndex, endIndex);
            let initialStr = substring;
            if (case_ === "Upper") {
                substring = substring.toUpperCase();
            } else if (case_ === "Lower") {
                substring = substring.toLowerCase();
            }
            rawKey = rawKey.replace(initialStr, substring);
            console.log(rawKey);
        } else if (command === "Slice") {
            let startIndex = Number(data[0]);
            let endIndex = Number(data[1]);
            let substring = rawKey.slice(startIndex, endIndex);
            rawKey = rawKey.replace(substring, "");
            console.log(rawKey);
        } else if (command === "Generate") {
            console.log(`Your activation key is: ${rawKey}`);
            break;
        }
    }
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log("------------------");
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);
