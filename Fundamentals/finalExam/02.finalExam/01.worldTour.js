function worldTour(arr) {
    let myStops = arr.shift();

    for (let line of arr) {
        line = line.split(":");
        if (line[0] === "Travel") {
            console.log(`Ready for world tour! Planned stops: ${myStops}`);
        }

        if (line[0] === "Add Stop") {
            let index = Number(line[1]);
            let stop = line[2];
            if (myStops[index] !== undefined) {
                myStops = myStops.slice(0, index) + stop + myStops.slice(index);
                console.log(myStops);
            }
        } else if (line[0] === "Remove Stop") {
            let startIndex = Number(line[1]);
            let endIndex = Number(line[2]);
            if (myStops[startIndex] !== undefined && myStops[endIndex] !== undefined)
                myStops = myStops.slice(0, startIndex) + myStops.slice(endIndex + 1);
            console.log(myStops);
        } else if (line[0] === "Switch") {
            let oldString = line[1];
            let newString = line[2];
            if (myStops.includes(oldString)) {
                myStops = myStops.replace(oldString, newString);
            }
            console.log(myStops);
        }
    }
}

// worldTour(["Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"]);
// console.log("-------------");
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);
