function meetings(arr) {
    let dict = {};

    for (let info of arr) {
        let [day, name] = info.split(" ");
        if (dict.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            dict[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let key in dict) {
        console.log(`${key} -> ${dict[key]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
console.log("--------------");
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);