function emojiDetector(arr) {
    let pattern = /(:{2}|\*{2})(?<word>[A-Z][a-z]{2,})(\1)/g;
    let tresholdPattern = /(?<threshold>[0-9]+)/g;
    let tresholdArr = [];
    let threshold = 1;
    let emojisCounter = 0;

    while ((digit = tresholdPattern.exec(arr)) !== null) {
        tresholdArr.push(digit.groups.threshold);
    }
    tresholdArr = tresholdArr.join("").split("");

    for (let digit of tresholdArr) {
        digit = Number(digit);
        threshold *= digit;
    }
    let coolEmojis = [];

    while ((validWord = pattern.exec(arr)) !== null) {
        emojisCounter++;
        let word = validWord.groups.word.split("");

        let wordSum = 0;
        for (let ch of word) {
            let sum = ch.charCodeAt();
            wordSum += sum;
        }
        if (wordSum >= threshold) {
            coolEmojis.push(validWord[0]);
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojisCounter} emojis found in the text. The cool ones are:`);
    coolEmojis.forEach((el) => console.log(`${el} `));
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log("-------------");
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
console.log("-----------");
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable *English**."]);
