function schoolGrades(arr) {
    let studentGrades = new Map();

    for (let data of arr) {
        let stutendeData = data.split(" ");
        let name = stutendeData.shift();
        let grades = stutendeData.map((m) => Number(m));

        if (studentGrades.has(name)) {
            let currentGrades = studentGrades.get(name);
            let newValue = currentGrades.concat(grades);
            studentGrades.set(name, newValue);
        } else {
            studentGrades.set(name, grades);
        };
    };

    let sortedList = Array.from(studentGrades);
    sortedList = sortedList.sort((a, b) => a[0].localeCompare(b[0]));

    for (let student of sortedList) {
        let avgNum = (student[1].reduce(
            (accumulator, value) => accumulator + value, 0)) / student[1].length;
        console.log(`${student[0]}: ${avgNum.toFixed(2)}`);
    };
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
console.log("------------");
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);