function processing(text, word) {

    while (text.includes(word)) {
        text = text.replace(word, "*".repeat(word.length));
    }
    console.log(text)
}

processing('A small sentence with some words', 'small');
console.log("-----------------");
processing('Find the hidden word', 'hidden');