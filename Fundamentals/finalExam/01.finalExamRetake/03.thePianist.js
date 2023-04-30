function thePianist(arr) {
    let count = Number(arr.shift());
    let myList = {};

    for (let i = 0; i < count; i++) {
        let [piece, composer, key] = arr.shift().split("|");
        myList[piece] = [composer, key];
    }

    for (let data of arr) {
        data = data.split("|");
        let command = data.shift();
        if (command === "Stop") {
            break;
        }
        if (command === "Add") {
            if (myList.hasOwnProperty(data[0])) {
                console.log(`${data[0]} is already in the collection!`);
            } else {
                myList[data[0]] = [data[1], data[2]];
                console.log(`${data[0]} by ${data[1]} in ${data[2]} added to the collection!`);
            }
        } else if (command === "Remove") {
            if (myList.hasOwnProperty(data[0])) {
                delete myList[data[0]];
                console.log(`Successfully removed ${data[0]}!`);
            } else {
                console.log(`Invalid operation! ${data[0]} does not exist in the collection.`);
            }
        } else if (command === "ChangeKey") {
            if (myList.hasOwnProperty(data[0])) {
                let key = data[0];
                myList[key][1] = data[1];
                console.log(`Changed the key of ${data[0]} to ${data[1]}!`)
            } else {
                console.log(`Invalid operation! ${data[0]} does not exist in the collection.`);
            }
        }
    }

    for (let data of Object.entries(myList)) {
        let name = data.shift();
        let [composer, key] = data.flat();
        console.log(`${name} -> Composer: ${composer}, Key: ${key}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']);
console.log("----------------");
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'])