function sleepyTom(input) {
    let freeDays = Number(input[0]);
    let workDays = 365 - freeDays;
    let playTime = (workDays * 63) + (freeDays * 127)
    
    if (playTime > 30000) {
        let timeExceeds = playTime - 30000;
        let h = Math.floor(timeExceeds / 60);
        let m = (timeExceeds % 60)
        console.log("Tom will run away");
        console.log(`${h} hours and ${m} minutes more for play`);
    } else if (playTime < 30000) {
        let timeLeft = 30000 - playTime;
        let h = Math.floor(timeLeft / 60);
        let m = (timeLeft % 60);
        console.log("Tom sleeps well");
        console.log(`${h} hours and ${m} minutes less for play`)
    }
}

sleepyTom(["113"])