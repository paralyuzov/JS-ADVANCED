class footballTeam {
    constructor(clubName, country) {

        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];

    }

    newAdditions(footballPlayers) {
        let names = [];

        for (let player of footballPlayers) {

            let [name, age, value] = player.split("/");
            age = Number(age);
            value = Number(value);

            let currentPlayer = {
                name,
                age,
                value,
            }

            let findPlayer = this.invitedPlayers.find(x => x.name == name);

            if (!findPlayer) {
                this.invitedPlayers.push(currentPlayer);
                names.push(name)
            } else {
                if (findPlayer.value < value) {
                    findPlayer.value = value;
                }
            }
        }

        return `You successfully invite ${names.join(", ")}.`
    }

    signContract(selectedPlayer) {

        let [name, offer] = selectedPlayer.split("/");
        offer = Number(offer);

        let findPlayer = this.invitedPlayers.find(x => x.name == name);

        if (!findPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (offer < findPlayer.value) {

            let difference = findPlayer.value - offer
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!`);

        } else {

            findPlayer.value = "Bought";
            return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;

        }

    }

    ageLimit(name, age) {

        age = Number(age);
        let findPlayer = this.invitedPlayers.find(x => x.name == name);

        if (!findPlayer) {
            return `${name} is not invited to the selection list!`;
        }

        let ageDifference = age - findPlayer.age;
        if (findPlayer.age >= age) {
            return `${name} is above age limit!`;
        } else if (ageDifference < 5) {
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        } else if (ageDifference > 5) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }

    }

    transferWindowResult() {

        let output = [];
        output[0] = "Players list:";
        let sorted = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        sorted.forEach(x => output.push(`Player ${x.name}-${x.value}`));

        return `${output.join("\n")}`

    }

}









let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

