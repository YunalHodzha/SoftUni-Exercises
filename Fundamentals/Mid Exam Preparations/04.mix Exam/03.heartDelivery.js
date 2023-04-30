function heartDelivery(arr) {
    let myArr = arr.shift().split("@").map(Number);
    let indexPosition = 0;

    let index = 0;
    while (arr[index] !== "Love!") {
        let command = arr[index].split(" ");
        let jumpLength = Number(command[1]);
        let housePosition = indexPosition + jumpLength;
        index++
        if (myArr[housePosition] <= 0) {
            console.log(`Place ${housePosition} already had Valentine's day.`);
            indexPosition = housePosition;
            continue;
        }

        if (housePosition < myArr.length) {
            myArr[housePosition] -= 2;
            if (myArr[housePosition] <= 0) {
                console.log(`Place ${housePosition} has Valentine's day.`);
            }
        } else {
            indexPosition = 0;
            housePosition = 0
            if (myArr[housePosition] <= 0) {
                console.log(`Place ${housePosition} already had Valentine's day.`);
                continue;
            }
            myArr[indexPosition] -= 2;
            if (myArr[indexPosition] <= 0) {
                console.log(`Place ${indexPosition} has Valentine's day.`);
            }
            continue;
        }
        indexPosition = housePosition;
    }

    console.log(`Cupid's last position was ${indexPosition}.`);
    checkMission(myArr);

    function checkMission(arr) {
        let count = 0;
        for(let i = 0; i<arr.length; i++) {
            if(arr[i] > 0) {
                count++;
            }
        }
        if(count === 0) {
            console.log(`Mission was successful`);
        }else {
            console.log(`Cupid has failed ${count} places.`);
        }
    }
}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])
console.log("------------");
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
