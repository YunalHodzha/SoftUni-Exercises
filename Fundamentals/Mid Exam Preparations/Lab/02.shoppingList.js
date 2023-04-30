function muOnline(input) {
    let health = 100;
    let bitCoins = 0;
    let roomCounter = 0;
    let isOver = false;

    let dungeon = input;
    dungeon = dungeon.split("|");

    for (let i = 0; i < dungeon.length; i++) {
        roomCounter++;
        let room = dungeon[i].split(" ");
        let encounter = room[0];
        let value = Number(room[1]);

        switch (encounter) {
            case "potion":
                let healed = health + value <= 100 ? (health + value) - health : 100 - health;
                health = health + value > 100 ? 100 : health + value;

                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                bitCoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${encounter}.`);
                } else {
                    console.log(`You died! Killed by ${encounter}.`);
                    console.log(`Best room: ${roomCounter}`);
                    isOver = true;
                }
                break;
        }
        if (isOver) {
            break;
        }

    }

    if (isOver === true) {
        
    } else {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitCoins}\nHealth: ${health}`);
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log("-----------");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");