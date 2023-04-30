function arenaTier(data) {
    let arenaList = new Map;

    for (let info of data) {
        if (info === "Ave Cesar") {
            ending(arenaList);
        }

        let command = info.split(" ");
        if (command[1] === "vs") {
            let hero1 = command[0];
            let hero2 = command[2];
            if (arenaList.has(hero1) && arenaList.has(hero2)) {
                let hero1Techniques = Array.from(arenaList.get(hero1));
                let hero2Techniques = Array.from(arenaList.get(hero2));

                for (let data of hero1Techniques) {
                    if (hero2Techniques.flat().includes(data[0])) {
                        let hero1Sum = dueling(hero1Techniques);
                        let hero2Sum = dueling(hero2Techniques);

                        if (hero1Sum > hero2Sum) {
                            arenaList.delete(hero2);
                        } else if (hero2Sum > hero1Sum) {
                            arenaList.delete(hero1);
                        }
                    }
                }
            }

        } else {
            let name = command[0];
            let technique = command[2];
            let skill = command[4];

            if (!arenaList.has(name)) {
                arenaList.set(name, new Map());
                arenaList.get(name).set(technique, Number(skill))
            }
            if(!arenaList.get(name).has(technique) ||
            (arenaList.get(name).has(technique) &&
            arenaList.get(name).get(technique)<skill)) {
                arenaList.get(name).set(technique, Number(skill));
            }
            

            }
        
    }

    function ending(arenaList) {
        let totalPointObj = new Map();
        let sortedTotalPoints = [];


        for (let [gladiatorName, technique] of arenaList) {
            let sum = 0;

            for (let [techName, skill] of technique) {
                sum += skill;
            }
            totalPointObj.set(gladiatorName, sum);
        }
        sortedTotalPoints = Array.from(totalPointObj).sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        })

        for (let [gladiatorName, skill] of sortedTotalPoints) {
            console.log(`${gladiatorName}: ${skill} skill`);

            let tech = Array.from(arenaList.get(gladiatorName)).sort((a, b) => {
                return b[1] - a[1] || a[0].localeCompare(b[0])
            });
            for (let [technique, skill] of tech) {
                console.log(`- ${technique} <!> ${skill}`);
            }
        }
    }

    function dueling(arr) {
        let sum = 0;
        for (let data of arr) {
            sum += data[1];
        }
        return sum;
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar']);
console.log("-------------");
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);