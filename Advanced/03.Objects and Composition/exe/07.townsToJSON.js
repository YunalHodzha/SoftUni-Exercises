function townsToJSON(input) {
    let towns = [];

    for (let i = 1; i < input.length; i++) {
        let [town, latitude, longitude] = input[i].split(" | ");
        town = town.substring(2,);
        longitude = Number(Number(longitude.substring(0, longitude.length -2)).toFixed(2));
        latitude = Number(Number(latitude).toFixed(2));

        towns.push({Town: town, Latitude: latitude, Longitude: longitude});
    }
    console.log(JSON.stringify(towns));
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
console.log("-------------");
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);