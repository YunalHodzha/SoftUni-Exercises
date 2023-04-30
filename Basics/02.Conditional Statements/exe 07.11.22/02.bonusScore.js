function bonusScore(input) {
    score = Number(input[0]);
    bonus = 0;

    if (score <= 100) {
        bonus = bonus + 5;
    } else if (score <= 1000) {
        bonus = bonus + (score * 0.20);
    } else {
        bonus =bonus + (score * 0.1);
    }

    if (score % 2 === 0) {
        bonus += 1;
    } else if (score % 10 === 5 ) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(bonus + score)
}

bonusScore(["20"])