function armies(arr) {
    let armies = {};


    for (let data of arr) {

        if (data.includes("arrive")) {
            data = data.split(" ");
            let command = data.pop();
            let leader = data.join(" ");

            armies[leader] = {};
        } else if (data.includes(":")) {
            let name = data.split(": ");
            let [army, count] = name.pop().split(", ");
            count = Number(count);

            if (armies.hasOwnProperty(name)) {
                armies[name][army] = count;
            } else {
                continue;
            }
        } else if (data.includes("+")) {
            let [army, count] = data.split(" + ");
            count = Number(count);

            for (let key of Object.entries(armies)) {
                let name = key[0];
                let currentArmy = key[1];
                if (currentArmy.hasOwnProperty(army)) {
                    let currentCount = currentArmy[army];
                    currentArmy[army] = count + currentCount;
                }
            }

        } else if (data.includes("defeated")) {
            data = data.split(" ");
            let command = data.pop();
            let leader = data.join(" ");

            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
            }
        }
    }

    let leaders = {};


    for (let [key, value] of Object.entries(armies)) {
        let armyCount = 0;
        let name = key;

        for (let [key, value] of Object.entries(armies[name])) {
            armyCount += value;
        }
        leaders[name] = armyCount;
    }

    let leadersArr = Object.entries(leaders);
    leadersArr.sort((a, b) => b[1] - a[1]);

    for (let leader of leadersArr) {
        console.log(`${leader[0]}: ${leader[1]}`);
        let armyArr = Object.entries(armies[leader[0]]).sort((a, b) => b[1] - a[1]);

        armyArr.forEach(element => {
            console.log(`>>> ${element[0]} - ${element[1]}`);
        });
    }
}

armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']
)
console.log("----------------");
armies(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423']
)