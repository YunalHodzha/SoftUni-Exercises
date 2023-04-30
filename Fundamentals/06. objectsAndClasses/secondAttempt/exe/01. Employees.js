function employees(arr) {
    let list = [];

    for (let person of arr) {
        let employee = {
            name: person,
            number: person.length,
        }
        list.push(employee);
    }

    list.forEach((employee) => console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`));
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
console.log("--------");
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
)