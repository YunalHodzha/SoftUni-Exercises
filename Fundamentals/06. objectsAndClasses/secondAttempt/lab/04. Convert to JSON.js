function converting(fName, lName, color) {
    let person = {
        name: fName,
        lastName: lName,
        hairColor: color,
    }
    console.log(JSON.stringify(person))
}

converting('George', 'Jones', 'Brown');
console.log("-------------");
converting('Peter', 'Smith', 'Blond');