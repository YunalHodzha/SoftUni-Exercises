function solve(input) {
    let index = 0;
    let jury = Number(input[index]);
    index++;

    let presentation = input[index];
    index++;
    let finalAvg = 0;
    let presentationCount = 0;

    while(presentation !== "Finish"){
        let avgNum = 0;

        for(let juryGrade = 0; juryGrade < jury; juryGrade++ ){
        let currentNum = Number(input[index]);
        avgNum += currentNum;
        index++;
        }
        console.log(`${presentation} - ${(avgNum / jury).toFixed(2)}.`);
        finalAvg += (avgNum / jury);
        presentationCount++;
        presentation = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(finalAvg/presentationCount).toFixed(2)}.`)
}

solve(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


