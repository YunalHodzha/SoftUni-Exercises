function scoringSystem(arr) {
    arr = arr.map(Number);
    let studentsCount = arr.shift();
    let lecturesCount = arr.shift();
    let additionalBonus = arr.shift();

    let maxBonus = 0;
    let student = 0;

    for (let i = 0; i < studentsCount; i++) {
        let totalBonus = 0;
        totalBonus = (arr[i] / lecturesCount) * (5 + additionalBonus);

        if (totalBonus >= maxBonus) {
            maxBonus = totalBonus;
            student = arr[i];
        }

    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${student} lectures.`)
}

scoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
);
console.log("----------");
scoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
)