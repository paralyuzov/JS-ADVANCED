class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {

        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        }

        this.participants[participantName] = participantGender;

        return `A new participant has been added - ${participantName}`;

    }

    completeness(participantName, condition) {

        condition = Number(condition);

        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        let disciplines = Math.floor(condition / 30);

        if (disciplines <= 2) {
            return `${participantName} could only complete ${disciplines} of the disciplines`;
        }

        let value = this.participants[participantName];
        let participant = {
            name: participantName,
            gender: value,
        };

        this.listOfFinalists.push(participant);
        delete this.participants[participantName];

        return `Congratulations, ${participantName} finished the whole competition`

    }

    rewarding(participantName) {

        let findPerson = this.listOfFinalists.find(x => x.name == participantName);

        if (!findPerson) {
            return `${participantName} is not in the current finalists list`;

        }

        return `${participantName} was rewarded with a trophy for his performance`;

    }

    showRecord(criteria) {
        let output = [];
        if (this.listOfFinalists.length == 0) {
            return `There are no finalists in this competition`;
        }

        let findCriteria = this.listOfFinalists.find(x => x.gender == criteria);
        if (!findCriteria && criteria != "all") {
            return `There are no ${criteria}'s that finished the competition`;
        }

        switch (criteria) {
            case "male":
                return `${findCriteria.name} is the first ${findCriteria.gender} that finished the ${this.competitionName} triathlon`;


            case "female":
                return `${findCriteria.name} is the first ${findCriteria.gender} that finished the ${this.competitionName} triathlon`;


            case "all":
                output.push(`List of all ${this.competitionName} finalists:`);
                this.listOfFinalists.sort((a, b) => a.name.localeCompare(b.name)).
                    forEach(x => output.push(x.name));
                break;
        }

        return `${output.join("\n")}`;

    }

}


const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));




