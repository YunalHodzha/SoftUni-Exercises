function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let roomCounter = 0;

    let rooms = (String(arr)).split("|");

    for (let el of rooms) {
        roomCounter++;
        let room = el.split(" ");
        let encounter = room[0];
        let value = Number(room[1]);

        switch (encounter) {
            case "potion":
                let oldHealth = health;
                health += value;
                if (health > 100) {
                    health = 100;
                }
                console.log(`You healed for ${health - oldHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += value;
                console.log(`You found ${value} coins.`);
                break;
            default:
                let monster = encounter;
                health -= value;
                if (health <= 0) {
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${roomCounter}`);
                    break;
                } else {
                    console.log(`You slayed ${monster}.`);
                }
        }
        if (health <= 0) {
            break;
        }
    }
    if (health > 0) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log("-------------------------------");
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);