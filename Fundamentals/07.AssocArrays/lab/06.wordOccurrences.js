function wordsCounter(arr) {
    let words = new Map();

    for (let word of arr) {
        if (words.has(word)) {
            let currentNum = words.get(word);
            let newValue = currentNum + 1;
            words.set(word, newValue);
        } else {
            let counter = 1
            words.set(word, counter);
        }
    }

    let sortedWords = Array.from(words);
    sortedWords = sortedWords.sort((a, b) => b[1] - a[1]);

    sortedWords.forEach((el) => console.log(`${el[0]} -> ${el[1]} times`));
}

wordsCounter(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log("---------------");
wordsCounter(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);