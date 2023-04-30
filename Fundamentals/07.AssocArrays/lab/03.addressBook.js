function addressBook(arr) {
    let book = {};

    for (let info of arr) {
        let [name, address] = info.split(":");

        book[name] = address;
    }

    let sorted = Object.entries(book);
    sorted = sorted.sort((a, b) => a[0].localeCompare(b[0]));
    sorted.forEach((el) => console.log(`${el[0]} -> ${el[1]}`));
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
console.log("------------");
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);