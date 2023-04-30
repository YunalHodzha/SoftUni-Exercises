function shootForTheWin(arr) {
    let targets = arr.shift().split(" ").map(Number);
    

    for(let i = 0; i<arr.length; i++) {
        if(arr[i] === "End") {
            break;
        }
        let shot = Number(arr[i]);

        if(targets.includes(targets[shot])) {
            
        }else {
            continue;
        }
    }
    
    console.log(targets)
}

shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
console.log("------------");
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
