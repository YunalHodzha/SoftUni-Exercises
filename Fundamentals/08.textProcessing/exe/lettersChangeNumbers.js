function proccesing(input) {
    let alphabetNums = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }

    let inputArr = input.split(" ");
    inputArr = inputArr.filter((el) => el.length > 1);
    let sum = 0;

    for (let el of inputArr) {
        let currentSum = 0;
        let firstChar = el[0]
        let lastChar = el[el.length -1];
        el = Number(el.substring(1, el.length -1));

        currentSum += firstOperation(firstChar, el);
        currentSum = secondOperation(lastChar, currentSum);
        sum += currentSum;
    }

    function firstOperation(char, number) {
        let sum = 0;
        if (char === char.toUpperCase()) {
            char = char.toLowerCase();
            sum += number / alphabetNums[char];
        } else {
            sum += number * alphabetNums[char];
        }
        return sum;
    }

    function secondOperation(char, number) {
        let sum = 0;
        if (char === char.toUpperCase()) {
            char = char.toLowerCase();
            sum += number - alphabetNums[char];
        } else {
            sum += number + alphabetNums[char];
        }
        return sum;
    }
    console.log(sum.toFixed(2))
}

proccesing('   A12b    s17G    ');
console.log("--------------");
proccesing('    P34562Z     q2576f               H456z            ')
console.log("--------------");
proccesing('    a1A      ');
