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

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name: name, salary: salary, position: position, department: department });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment;
        let bestAvgSalary = 0;

        for (let department in this.departments) {
            const employees = this.departments[department];
            let totalSalarySum = 0;
            let counter = 0;

            for (let employee of employees) {
                totalSalarySum += employee.salary;
                counter++;
            }

            let currentAvg = (totalSalarySum / counter).toFixed(2);
            if (currentAvg > bestAvgSalary) {
                bestAvgSalary = currentAvg;
                bestDepartment = department;
            }
        }

        let sortedEmployees = this.departments[bestDepartment];
        sortedEmployees.sort((a, b) => {
            if (a.salary === b.salary) {
                return a.name.localeCompare(b.name);
            }
            return b.salary - a.salary
        })

        let result = [`Best Department is: ${bestDepartment}`, `Average salary: ${bestAvgSalary}`];
        sortedEmployees.forEach(element => {
            result.push(`${element.name} ${element.salary} ${element.position}`);
        });

        return result.join("\n");
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction")
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());