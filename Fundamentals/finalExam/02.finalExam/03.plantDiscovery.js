function plantDiscovery(arr) {
    let plants = {};
    let count = Number(arr.shift());

    for (let i = 0; i < count; i++) {
        let [plant, rarity] = arr.shift().split("<->");
        plants[plant] = { rarity: Number(rarity), rating: 0, ratingCount: 0 };
    }

    for (let data of arr) {
        if (data === "Exhibition") {
            break;
        }
        data = data.split(": ");
        let command = data.shift();
        if (command === "Rate") {
            let [plant, rating] = data[0].split(" - ");
            if (!plants.hasOwnProperty(plant)) {
                console.log("error");
                continue;
            }
            rating = Number(rating);
            plants[plant].rating += rating;
            plants[plant].ratingCount++;
        } else if (command === "Update") {
            let [plant, rarity] = data[0].split(" - ");
            if (!plants.hasOwnProperty(plant)) {
                console.log("error");
                continue;
            }
            rarity = Number(rarity);
            plants[plant].rarity = rarity;
        } else if (command === "Reset") {
            let plant = data[0];
            if (!plants.hasOwnProperty(plant)) {
                console.log("error");
                continue;
            }
            plants[plant].rating = 0;
            plants[plant].ratingCount = 0;
        }
    }

    console.log(`Plants for the exhibition:`);
    for (let data of Object.entries(plants)) {
        let plant = data[0];
        let rarity = plants[plant].rarity;
        let avgRate = 0;
        if (plants[plant].rating === 0) {
            avgRate = 0.00;
            console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${avgRate.toFixed(2)}`);
        } else {
            avgRate = plants[plant].rating / plants[plant].ratingCount;
            console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${avgRate.toFixed(2)}`);
        }
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
console.log("--------------");
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])