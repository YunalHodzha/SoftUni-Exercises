function proccess(arr) {
    let pilotsInfo = {};
    let pilots = arr.shift().split(", ");
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /[0-9]/g;

    for (let pilot of pilots) {
        pilotsInfo[pilot] = 0;
    }

    for (let line of arr) {
        if (line === "end of race") {
            break;
        }

        let name = line.match(namePattern).join("");
        let digitArr = line.match(distancePattern);
        let distance = 0;
        for (let el of digitArr) {
            distance += Number(el);
        }

        if (pilotsInfo.hasOwnProperty(name)) {
            pilotsInfo[name] += distance;
        }
    }

    let sortedPilots = Object.entries(pilotsInfo);
    sortedPilots = sortedPilots.sort((a, b) => b[1] - a[1]);
    sortedPilots = sortedPilots.slice(0, 3);

    console.log(`1st place: ${sortedPilots[0][0]}\n2nd place: ${sortedPilots[1][0]}\n3rd place: ${sortedPilots[2][0]}`);
}

proccess(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
console.log("--=------------");
proccess(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);