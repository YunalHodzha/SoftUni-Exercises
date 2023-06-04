class Company {

    departments = {};

    addEmployee(name, salary, position, department) {
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] === "" || arguments[i] === undefined || arguments[i] === null) {
                throw new Error("Invalid input!");
            }
        }
        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        this.departments[name] = { salary: salary, position: position, department: department };
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let array = Array.from(this.departments)
        console.table(array)

    }

}

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"))
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());