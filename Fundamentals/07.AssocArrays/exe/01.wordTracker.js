function wordTracker(arr) {
    let obj = {};
    let words = arr.shift().split(" ");

    for (let word of words) {
        obj[word] = 0;
    }

    for (let word of arr) {
        if (obj.hasOwnProperty(word)) {
            obj[word] += 1;
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    sorted.forEach((el) => console.log(`${el[0]} - ${el[1]}`));
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words',
    'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])
console.log("-----------------");
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])
