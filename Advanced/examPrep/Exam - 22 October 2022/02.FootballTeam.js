class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let result = [];

        for (let player of footballPlayers) {
            let [name, age, playerValue] = player.split("/");
            playerValue = Number(playerValue);
            age = Number(age);

            let isPlayer = this.invitedPlayers.find(p => p.name === name);

            if (isPlayer === undefined) {
                this.invitedPlayers.push({ name, age, playerValue });
                result.push(name);
            } else {
                if (isPlayer.playerValue < playerValue) {
                    isPlayer.playerValue = playerValue;
                    result.push(name);
                }
            }

        }
        return `You successfully invite ${result.join(", ")}.`;
    }

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split("/");
        offer = Number(offer);

        let isName = this.invitedPlayers.find(p => p.name === name);
        if (isName === undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (isName.playerValue > offer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${isName.playerValue - offer} million more are needed to sign the contract!`);
        }

        isName.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    }

    ageLimit(name, age) {
        let isName = this.invitedPlayers.find(p => p.name === name);

        if (isName === undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (isName.age >= age) {
            return `${name} is above age limit!`;
        }

        if ((age - isName.age) < 5) {
            return `${name} will sign a contract for ${age - isName.age} years with ${this.clubName} in ${this.country}!`
        } else {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
    }

    transferWindowResult() {
        let result = "Players list: \n";

        let sortedArr = this.invitedPlayers.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })

        sortedArr.forEach((p) => result += `Player ${p.name}-${p.playerValue}\n`);
        return result.trim();
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());