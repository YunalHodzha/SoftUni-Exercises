function heroesOfCodeAndLogic(arr) {
    let heroesCount = Number(arr.shift());
    let heroesList = {};

    for (let i = 0; i < heroesCount; i++) {
        let data = arr.shift()
        let [hero, hp, mp] = data.split(" ");
        heroesList[hero] = { hp: Number(hp), mp: Number(mp) };
    }

    for (let line of arr) {
        let data = line.split(" - ");
        let command = data.shift();

        if (command === "CastSpell") {
            let hero = data[0];
            let mpNeeded = Number(data[1]);
            let spellName = data[2];

            if (heroesList[hero].mp >= mpNeeded) {
                heroesList[hero].mp -= mpNeeded;
                console.log(`${hero} has successfully cast ${spellName} and now has ${heroesList[hero].mp} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === "TakeDamage") {
            let hero = data[0];
            let damage = Number(data[1]);
            let enemy = data[2];

            heroesList[hero].hp -= damage;
            if (heroesList[hero].hp > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${enemy} and now has ${heroesList[hero].hp} HP left!`);
            } else {
                console.log(`${hero} has been killed by ${enemy}!`);
                delete heroesList[hero];
            }
        } else if (command === "Recharge") {
            let hero = data[0];
            let amount = Number(data[1]);
            let currentMp = heroesList[hero].mp;

            heroesList[hero].mp += amount;
            if (heroesList[hero].mp > 200) {
                heroesList[hero].mp = 200;
                console.log(`${hero} recharged for ${200 - currentMp} MP!`);
            } else {
                console.log(`${hero} recharged for ${amount} MP!`);
            }
        } else if (command === "Heal") {
            let hero = data[0];
            let amount = Number(data[1]);
            let currentHp = heroesList[hero].hp;

            heroesList[hero].hp += amount;
            if (heroesList[hero].hp > 100) {
                heroesList[hero].hp = 100;
                console.log(`${hero} healed for ${100 - currentHp} HP!`);
            } else {
                console.log(`${hero} healed for ${amount} HP!`);
            }
        } else if (command === "End") {
            break;
        }
    }

    for (let hero of Object.entries(heroesList)) {
        let heroName = hero[0];
        let mp = hero[1].mp;
        let hp = hero[1].hp;

        console.log(`${heroName}\n  HP: ${hp}\n  MP: ${mp}`);
    }
}

heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);
console.log("---------------");
heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
])