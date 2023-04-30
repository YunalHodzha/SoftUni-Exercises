function treasureHunt(arr) {
    let chest = arr.shift().split("|");

    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i].split(" ");
        let command = commands.shift();

        switch (command) {
            case "Loot":
                looting(chest, commands);
                break;
            case "Drop":
                dropping(chest, commands);
                break;
            case "Steal":
                stealing(chest, commands);
                break;
            case "Yohoho!":
                if(chest.length === 0) {
                    console.log(`Failed treasure hunt.`);
                }else {
                    yohoho(chest);
                }
                break;
        }
    }


    function looting(arr, commands) {
        for (let i = 0; i < commands.length; i++) {
            let treasure = commands[i];
            if (arr.includes(treasure)) {
                continue;
            } else {
                arr.unshift(treasure);
            }
        }
        return arr;
    }

    function dropping(arr, commands) {
        let index = Number(commands[0]);
        if(arr.includes(arr[index])) {
            let item = arr.splice(index, 1);
            arr.push(item[0]);
        }
        return arr;
    }

    function stealing(arr, commands) {
        let count = Number(commands[0]);
        arr = arr.reverse();
        let stolenItems = arr.splice(0, count);
        arr = arr.reverse();
        console.log(stolenItems.reverse().join(", "));
        return arr;
    }

    function yohoho(arr) {
        let sum = 0;

        for(let i = 0; i<arr.length; i++) {
            let currentLoot = arr[i].length;
            sum += currentLoot;
        }
        let avgNum = sum / arr.length;
        console.log(`Average treasure gain: ${avgNum.toFixed(2)} pirate credits.`);
        return arr;
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);
console.log("-------------");
treasureHunt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
)
