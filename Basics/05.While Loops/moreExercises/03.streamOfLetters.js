function streamOfLetters(input) {
    let index = 0;

    let word = "";

    let cCounter = 0;
    let oCounter = 0;
    let nCounter = 0;
    let wordCounter = 0;

    let newWord = "";

    while (input[index] !== "End") {
        let symbol = input[index];
        if ((symbol >= "A" && symbol <= "Z") || (symbol >= "a" && symbol <= "z")) {
            if (symbol == "c") {
                if (cCounter < 1) {
                    cCounter++;
                    if (cCounter >= 1 && oCounter >= 1 && nCounter >= 1) {
                        newWord += word + " "
                        cCounter = 0;
                        oCounter = 0;
                        nCounter = 0;
                        word = "";
                        index++;
                        continue;
                    }
                    index++;
                    continue;
                }
            } else if (symbol == "o") {
                if (oCounter < 1) {
                    oCounter++;

                    if (cCounter >= 1 && oCounter >= 1 && nCounter >= 1) {
                        newWord += word + " "
                        cCounter = 0;
                        oCounter = 0;
                        nCounter = 0;
                        word = "";
                        index++;
                        continue;
                    }
                    index++;
                    continue;
                }
            } else if (symbol == "n") {
                if (nCounter < 1) {
                    nCounter++;

                    if (cCounter >= 1 && oCounter >= 1 && nCounter >= 1) {
                        newWord += word + " "
                        cCounter = 0;
                        oCounter = 0;
                        nCounter = 0;
                        word = "";
                        index++;
                        continue;
                    }
                    index++;
                    continue;
                }
            }
            word += symbol;
            index++;
        } else {
            index++;
        }
        symbol = input[index];
    }
    console.log(newWord)
}

streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"])