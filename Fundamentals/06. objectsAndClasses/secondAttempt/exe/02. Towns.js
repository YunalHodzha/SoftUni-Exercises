function towns(arr) {
    for (let line of arr) {
        let cityData = line.split(" | ");
        let city = cityData[0];
        let latitude = Number(cityData[1])
        let longitude = Number(cityData[2])

        let newCity = {
            town: city,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2),
        }
        console.log(JSON.parse(JSON.stringify(newCity)));
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
console.log("--------------");
towns(['Plovdiv | 136.45 | 812.575'])