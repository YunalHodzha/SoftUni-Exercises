function buildingWall(arr) {
    let concrete = 195;
    let totalConcrete = 0;

    let amountOfConcrete = [];

    while (arr.length > 0) {
        arr = arr.filter(item => item < 30);
        arr = arr.map(item => 1 + item);

        let currentDay = 0;
        for (el of arr) {
            currentDay += 195;
        }
        amountOfConcrete.push(currentDay);
        arr = arr.filter(item => item < 30);
    }
    totalConcrete = amountOfConcrete.reduce((sum, item) => sum += item);
    totalConcrete = totalConcrete * 1900;

    console.log(amountOfConcrete.join(", "));
    console.log(`${totalConcrete} pesos`);
}
buildingWall([21, 25, 28]);
console.log("---------");
buildingWall([17]);
console.log("---------");
buildingWall([17, 22, 17, 19, 17]);