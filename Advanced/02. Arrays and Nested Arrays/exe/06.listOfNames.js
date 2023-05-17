function listOfNames(arr) {
    arr.sort(((a,b) => a.localeCompare(b)));
    let newArr = arr.map(function(name, i, arr) {
        name = `${i + 1}.${name}`;
        return name;
    }).forEach(el => console.log(el));
}

listOfNames(["John",
    "Bob",
    "Christina",
    "Ema"]);