function lunchBreak(input) {
    let serialName = input[0];
    let episodeLength = Number(input[1]);
    let lunchBreak = Number(input[2]);

    let lunchingTime = (1/8) * lunchBreak;
    let restingTime = (1/4) * lunchBreak;
    let timeLeft = (lunchBreak - (lunchingTime + restingTime));

    if (timeLeft >= episodeLength) {
        let minutesLeft = Math.ceil(timeLeft - episodeLength);
        console.log(`You have enough time to watch ${serialName} and left with ${minutesLeft} minutes free time.`)
    } else if (timeLeft < episodeLength) {
        let minutesNeed = Math.ceil(episodeLength - timeLeft);
        console.log(`You don't have enough time to watch ${serialName}, you need ${minutesNeed} more minutes.`)
    }
}

lunchBreak(["Teen Wolf",
"48",
"60"])

