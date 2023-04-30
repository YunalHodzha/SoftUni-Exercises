function swimmingRecord(input) {
    worldRecord = Number(input[0]);
    distanceMeters = Number(input[1]);
    distanceIn1Sec = Number(input[2]);

    let totalDistanceInSec = distanceMeters * distanceIn1Sec;
    let slowdownTime = Math.floor(distanceMeters / 15) * 12.5;
    let totalTime = (totalDistanceInSec + slowdownTime).toFixed(2);

    if (worldRecord > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`)
    } else {
        let timeNeeded = (totalTime - worldRecord).toFixed(2);
        console.log(`No, he failed! He was ${timeNeeded} seconds slower.`)
    }
}


swimmingRecord(["10464",
"1500",
"20"])









