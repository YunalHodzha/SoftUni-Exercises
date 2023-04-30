function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let totalPeopleCount = 0;

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;

    for ( let i = 1; i < input.length; i++) {
        totalPeopleCount += Number(input[i])
    }

    for (let i = 1; i < input.length; i++) {
        if (input[i] <= 5 ) {
            group1 += Number(input[i]);
        }else if (input[i] <= 12) {
            group2 += Number(input[i]);
        }else if (input[i] <= 25) {
            group3 += Number(input[i]);
        }else if (input[i] <= 40) {
            group4 += Number(input[i]);
        }else {
            group5 += Number(input[i]);
        }
    }

    let group1Percent = (group1 / totalPeopleCount) * 100;
    console.log(group1Percent.toFixed(2)+"%");
    let group2Percent = (group2 / totalPeopleCount) * 100;
    console.log(group2Percent.toFixed(2)+"%");
    let group3Percent = (group3 / totalPeopleCount) * 100;
    console.log(group3Percent.toFixed(2)+"%");
    let group4Percent = (group4 / totalPeopleCount) * 100;
    console.log(group4Percent.toFixed(2)+"%");
    let group5Percent = (group5 / totalPeopleCount) * 100;
    console.log(group5Percent.toFixed(2)+"%");

}


trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

