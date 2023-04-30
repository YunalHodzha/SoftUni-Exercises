function schoolRegister(arr) {
    let studentList = [];

    for (let line of arr) {
        let currentLine = line.split(" ");
        let name = currentLine[2].replace(",", "");
        let score = Number(currentLine.pop());
        let grade = Number((currentLine[4].replace(",", "")));

        if (score >= 3) {
            grade++;
            let student = { name: name, grade: grade, score: score };
            studentList.push(student);
        }
    }
    let sorted = studentList.sort((a, b) => a.grade - b.grade);
    let student = { name: "Null", grade: 100, score: Number.MAX_SAFE_INTEGER };
    sorted.push(student);
    let finalResult = "";

    let currentGrade = sorted[0].grade;
    let students = [];
    let annualScore = [];
    for (let el of sorted) {
        if (el.grade !== currentGrade) {
            finalResult += (`${currentGrade} Grade\n`);
            finalResult += (`List of students: ${students.join(", ")}\n`);
            let score = annualScore.reduce((sum, el) => sum += el) / annualScore.length;
            finalResult += (`Average annual score from last year: ${score.toFixed(2)}\n`);
            finalResult += `\n`;

            students = [];
            annualScore = [];
        }
        currentGrade = el.grade;
        students.push(el.name);
        annualScore.push(el.score);
    }
    console.log(finalResult.trim());
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
)