function magicMetrices(arr) {
    let firstArr = arr[0];
    let secondArr = arr[1];
    let thirdArr = arr[2];

    let firstCell = (firstArr[0] + firstArr[1] + firstArr[2]);
    let secondCell = (secondArr[0] + secondArr[1] + secondArr[2]);
    let thirdCell = (thirdArr[0] + thirdArr[1] + thirdArr[2]);
    let cellsSum = false;

    if(firstCell == secondCell && secondCell == thirdCell & firstCell == thirdCell) {
        cellsSum = true;
    }
    
    let firstCol = (firstArr[0] + secondArr[0] + thirdArr[0]);
    let secondCol = (firstArr[1] + secondArr[1] + thirdArr[1]);
    let thirdCol = (firstArr[2] + secondArr[2] + thirdArr[2]);
    
    let colsSum = false;
    if(firstCol == secondCol && secondCol == thirdCol && firstCol == thirdCol){
        colsSum = true;
    }
     
    if(cellsSum && colsSum){
        console.log(true);
    }else{
        console.log(false);
    }
}

magicMetrices(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]);
console.log("-------------------------");
magicMetrices(
    [
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]
    ]);
console.log("-------------------------");
magicMetrices(
    [
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]);