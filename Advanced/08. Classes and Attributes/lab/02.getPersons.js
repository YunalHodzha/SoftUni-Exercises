function solve() {

    class Person {
        static instances = [];
        static getAllInstances() {
            return Person.instances;
        }

        constructor(fName, lName, age, email) {
            this.firstName = fName;
            this.lastName = lName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let person = (new Person("Anna", "Simpson", 22, 'anna@yahoo.com'));
    Person.instances.push(person);
    let person2 = new Person("SoftUni");
    Person.instances.push(person2);
    let person3 = new Person("Stephan", "Johnson", 25);
    Person.instances.push(person3);
    let person4 = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");
    Person.instances.push(person4);
    return Person.getAllInstances();
}

console.log(solve())