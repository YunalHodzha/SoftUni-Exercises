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