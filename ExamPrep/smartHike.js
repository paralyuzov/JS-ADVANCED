class SmartHike {

    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {

        altitude = Number(altitude);

        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        }

        this.goals[peak] = altitude;

        return `You have successfully added a new goal - ${peak}`;

    }

    hike(peak, time, difficultyLevel) {

        time = Number(time);

        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources == 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let usedResourses = time * 10;
        let difference = this.resources - usedResourses;

        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= usedResourses;

        let hike = { peak, time, difficultyLevel };
        this.listOfHikes.push(hike);

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;

    }

    rest(time) {

        time = Number(time);

        let restTime = time * 10;
        this.resources += restTime;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${restTime}% resources`;

    }

    showRecord(criteria) {

        let output = [];
        let sortByCriteria = [];

        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;

        }

        if (criteria == "easy" || criteria == "hard") {
            sortByCriteria = this.listOfHikes.filter(x => x.difficultyLevel == criteria);

            if (sortByCriteria.length == 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

        }

        let sortByTime = sortByCriteria.sort((a, b) => a.time - b.time)[0];

        switch (criteria) {
            case "easy":
                return `${this.username}'s best ${criteria} hike is ${sortByTime.peak} peak, for ${sortByTime.time} hours`;
            case "hard":
                return `${this.username}'s best ${criteria} hike is ${sortByTime.peak} peak, for ${sortByTime.time} hours`;
            case "all":
                output.push("All hiking records:");
                this.listOfHikes.forEach(x => output.push(`${this.username} hiked ${x.peak} for ${x.time} hours`));
                break;
        }

        return `${output.join("\n")}`;
    }

}


const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

