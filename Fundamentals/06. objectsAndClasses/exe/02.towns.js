function towns(arr) {
    class Town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split(" | ");
        let myTown = new Town(town, latitude, longitude);
        console.log(JSON.parse(JSON.stringify(myTown)));
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
console.log("--------------");
towns(['Plovdiv | 136.45 | 812.575']);