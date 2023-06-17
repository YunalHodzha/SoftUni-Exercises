class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let result = [];

        for (let candidate of candidates) {
            let [name, education, yearsExperience] = candidate.split("-");
            yearsExperience = Number(yearsExperience);

            let isCandidate = this.jobCandidates.find(c => c.name === name);


            if (isCandidate !== undefined) {
                if (isCandidate.yearsExperience < yearsExperience) {
                    isCandidate.yearsExperience = yearsExperience;
                    result.push(name);
                }
            } else if (isCandidate === undefined) {
                this.jobCandidates.push({ name, education, yearsExperience });
                result.push(name);
            }
        }
        let uniqueNames = result.filter(function (name, index, array) {
            return array.indexOf(name) === index;
        })

        return `You successfully added candidates: ${uniqueNames.join(", ")}.`;
    };

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split("-");

        let isName = this.jobCandidates.find(c => c.name === name);
        if (isName === undefined) {
            throw new Error(`${name} is not in the candidates list!`);
        };

        if (isName.yearsExperience < minimalExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
        };

        isName.yearsExperience = "hired";

        return `Welcome aboard, our newest employee is ${name}.`;
    };

    salaryBonus(name) {
        let isName = this.jobCandidates.find(c => c.name === name);

        if (isName === undefined) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (isName.education === "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if (isName.education === "Master") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }

    candidatesDatabase() {

        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }

        let result = "Candidates list:\n";
        let sortedArr = this.jobCandidates.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })

        sortedArr.forEach(candidate => result += `${candidate.name}-${candidate.yearsExperience}\n`);
        return result.trim();
    }
}



let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18", "John Doe-Master-12"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());


