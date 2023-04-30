function stadium(input) {
    let totalCapacity = Number(input[0]);
    let fansCount = Number(input[1]);

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for ( let i=2; i<=fansCount +1; i++) {
        switch (input[i]) {
            case "A":
                sectorA ++;
                break;
            case "B":
                sectorB ++;
                break;
            case "V":
                sectorV ++;
                break;
            case "G":
                sectorG ++;
                break;
        }
    }
let fansSum = sectorA + sectorB + sectorG + sectorV;

    console.log(`${((sectorA / fansCount) * 100).toFixed(2)}%`);
    console.log(`${((sectorB / fansCount) * 100).toFixed(2)}%`);
    console.log(`${((sectorV / fansCount) * 100).toFixed(2)}%`);
    console.log(`${((sectorG / fansCount) * 100).toFixed(2)}%`);
    console.log(`${((fansSum / totalCapacity) * 100).toFixed(2)}%`);
}

stadium(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"])