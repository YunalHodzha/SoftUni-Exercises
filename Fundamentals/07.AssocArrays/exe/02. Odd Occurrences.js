function oddOccurrences(input) {
    let myArr = input.split(" ");
    let newArr = [];
    let words = new Map();

    for (el of myArr) {
        el = el.toLowerCase();
        newArr.push(el);
    }

    for (let word of newArr) {
        if (words.has(word)) {
            let currentValue = words.get(word);
            words.set(word, currentValue + 1);
        } else {
            words.set(word, 1);
        }
    }

    let result = [];
    for (let word of words) {

        if (word[1] % 2 !== 0) {
            result.push(word[0]);
        }
    }

    console.log(result.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log("-----------------");
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')