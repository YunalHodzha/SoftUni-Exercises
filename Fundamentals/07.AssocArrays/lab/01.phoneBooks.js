function phoneBook(arr) {
    let dict = {};

    for (let line of arr) {
        let [name, number] = line.split(" ");

        dict[name] = number;
    }

    for (let key in dict) {
        console.log(`${key} -> ${dict[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
console.log("-----------");
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);