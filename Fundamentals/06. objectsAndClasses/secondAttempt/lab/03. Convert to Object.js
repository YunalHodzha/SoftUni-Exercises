function converting(obj) {
    obj = JSON.parse(obj);

    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}

converting('{"name": "George", "age": 40, "town": "Sofia"}');
console.log("--------------");
converting('{"name": "Peter", "age": 35, "town": "Plovdiv"}');