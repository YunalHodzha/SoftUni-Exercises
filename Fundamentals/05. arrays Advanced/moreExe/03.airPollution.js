function airPollution(map, commands) {

    for (let i = 0; i < map.length; i++) {
        map[i] = map[i].split(" ");
        map[i] = map[i].map((el) => Number(el));
    }

    for (let i = 0; i < commands.length; i++) {
        let currentData = commands[i].split(" ");
        let force = currentData[0];
        let value = Number(currentData[1]);


        if (force === "breeze") {
            for (let i = 0; i < map.length; i++) {
                map[value][i] -= 15;
                if (map[value][i] < 0) {
                    map[value][i] = 0;
                }
            }

        } else if (force === "gale") {
            for (let i = 0; i < map.length; i++) {
                map[i][value] -= 20;
                if (map[i][value] < 0) {
                    map[i][value] = 0;
                }
            }
        } else if (force === "smog") {
            for (let i = 0; i < map.length; i++) {
                for (let j = 0; j < map.length; j++) {
                    map[i][j] += value;
                }
            }
        }
    }

    let areas = [];

    for (let i = 0; i < map.length; i++) {

        for (let j = 0; j < map.length; j++) {
            let block = map[i][j];

            if (block >= 50) {
                let area = `[${i}-${j}]`;
                areas.push(area);
            }
        }
    }

    if (areas.length === 0) {
        console.log('No polluted areas');
    } else {
        console.log(`Polluted areas: ${areas.join(", ")}`);
    }
}

airPollution([
    '5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);
console.log("--------------");
airPollution([
    '5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'],
    ['smog 11', 'gale 3', 'breeze 1',
        'smog 2']);
console.log("------------");
airPollution([
    '5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35']);