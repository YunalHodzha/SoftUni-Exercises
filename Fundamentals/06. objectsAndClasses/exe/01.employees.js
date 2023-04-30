function employees(arr) {
    class Employee {
        constructor(name) {
            this.keyName = name;
            this.length = name.length;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let newPerson = new Employee(arr[i]);
        console.log(`Name: ${newPerson.keyName} -- Personal Number: ${newPerson.length}`);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);
console.log("-------------");
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland']);