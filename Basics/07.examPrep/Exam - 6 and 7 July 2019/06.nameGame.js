function nameGame(input) {
    let index = 0;
    let name = input[index];
    index++;

    let Maxpoints = 0;
    let winner = "";

    while (name !== "Stop") {

        let currentPoints = 0;

        for (i = 0; i < name.length; i++) {
            let number = Number(input[index]);
            if (name[i].charCodeAt(0) == number) {
                currentPoints += 10;
            } else {
                currentPoints += 2;
            }
            index++;
        }
        if (currentPoints >= Maxpoints) {
            Maxpoints = currentPoints;
            winner = name;
        }
        name = input[index]
        index++;
    }
    console.log(`The winner is ${winner} with ${Maxpoints} points!`)
}

nameGame(["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])

