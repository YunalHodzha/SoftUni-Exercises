function convert(firstName, lastName, color) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: color,
    }

    let converted = JSON.stringify(person);
    console.log(converted)
}

convert('George', 'Jones', 'Brown');
console.log("------------");
convert('Peter', 'Smith', 'Blond')