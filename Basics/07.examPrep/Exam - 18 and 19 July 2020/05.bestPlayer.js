function bestPlayer(input) {
    let index = 0;
    let player = input[index]
    index++;

    let goals = Number(input[index]);
    index++;

    let mostGoals = Number.MIN_SAFE_INTEGER;
    let bestPlayer = "";
    let hatTrick = false;

    while (player !== "END") {
        if (goals > mostGoals) {
            mostGoals = goals;
            bestPlayer = player;
        }
        if (mostGoals >= 10){
            hatTrick = true;
            break;
        }else if (mostGoals >=3){
            hatTrick = true;
        }
        player = input[index];
        index++;
        goals = Number(input[index]);
        index++;
    }
    console.log(`${bestPlayer} is the best player!`);
    if (hatTrick){
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    }else {
    console.log(`He has scored ${mostGoals} goals.`);
    }
}

bestPlayer(["Petrov",
"2",
"Drogba",
"11"])


