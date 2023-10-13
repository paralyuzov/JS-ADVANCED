class JobOffers {
    constructor(employer, position) {

        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
        this.tempNames = [];
    }

    jobApplication(candidates) {

        for (const candidate of candidates) {
            let [name, education, experience] = candidate.split("-");
            experience = Number(experience);

            let person = { name, education, experience };

            let findPerson = this.jobCandidates.find(x => x.name == name);

            if (findPerson) {
                if (findPerson.experience < experience) {
                    findPerson.experience = experience;
                }
            } else {
                this.jobCandidates.push(person);
                if (!this.tempNames.includes(name)) {
                    this.tempNames.push(name);
                }
            }
        }

        return `You successfully added candidates: ${this.tempNames.join(", ")}.`

    }

    jobOffer(chosenPerson) {
        let [name, minimalExp] = chosenPerson.split("-");
        minimalExp = Number(minimalExp);

        let findName = this.jobCandidates.find(x => x.name == name);
        if (!findName) {
            throw new Error(`${name} is not in the candidates list!`)
        }
        if (minimalExp > findName.experience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExp} years.`);
        }

        findName.experience = "hired";
        return `Welcome aboard, our newest employee is ${name}.`

    }

    salaryBonus(name) {

        let findName = this.jobCandidates.find(x => x.name == name);
        if (!findName) {
            throw new Error(`${name} is not in the candidates list!`)
        }

        if (findName.education == "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if (findName.education == "Master") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }

    candidatesDatabase() {
        let result = [];
        if (this.jobCandidates.length == 0) {
            throw new Error("Candidate Database is empty!");
        }

        result.push("Candidates list:");
        let sorted = this.jobCandidates
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(x => result.push(`${x.name}-${x.experience}`));
        return result.join("\n");
    }

}





let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());


