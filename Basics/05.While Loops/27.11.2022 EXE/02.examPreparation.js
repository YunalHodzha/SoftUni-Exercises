function examPreparation(input) {
    let lowPoints = Number(input[0]);
    let index = 1;
    let task = input[1];
    let taskScore = Number(input[index +1]);
    let lowPointCount = 0;
    let scoreSum = 0;

    while (task !== "Enough") { 
        if (taskScore <= 4) {
            lowPointCount++
            if (lowPointCount === lowPoints) {
                break;
            }
        }
        scoreSum += taskScore;
        index += 2;
        task = input[index];
    }
    if (task === "Enough") {
        console.log (`Average score: {средна оценка}`);
        console.log (`Number of problems: {броя на всички задачи}`);
        console.log (`Last problem: ${input[index-2]}`);
    } else {
        console.log(`You need a break, ${lowPoints} poor grades.`)
    }
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
