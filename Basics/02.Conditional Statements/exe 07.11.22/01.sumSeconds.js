function totalFinishTime(input) {
    timeFirst = Number(input[0]);
    timeSecond = Number(input[1]);
    timeThird = Number(input[2]);

    totalTime = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

totalFinishTime(["14", "12", "10"])