function textFilling(data) {
    let textArray = data.shift().split(" ");
    let words = data.shift();

    for (let i = 0; i < textArray.length; i++) {
        let currentWord = textArray[i];
        let specialCh = "";

        if (currentWord.includes("_")) {
            for (let ch of currentWord) {
                if (ch !== "_") {
                    currentWord = currentWord.replace(ch, "");
                    specialCh = ch;
                }
            }
            let wordLength = currentWord.length;
            for (let word of words) {
                if (wordLength === word.length) {
                    word += specialCh;
                    textArray[i] = word;
                    break;
                }
            }
        }
    }

    console.log(textArray.join(" "));
}

textFilling(
    ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);