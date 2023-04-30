function reception(arr) {
    arr = arr.map(Number);
    let studentsCount = arr.pop();
    let studentsPerHour = arr.reduce((sum, num) => sum += num);

    let timePassed = 0;
    let hourCounter = 0;
    while (studentsCount > 0) {
        if (hourCounter === 3) {
            timePassed++
            hourCounter = 0;
            continue;
        }
        studentsCount -= studentsPerHour;
        timePassed++;
        hourCounter++;
    }
    console.log(`Time needed: ${timePassed}h.`);
}

reception(['5', '6', '4', '20']);
console.log("---------");
reception(['1', '2', '3', '45']);
console.log("---------");
reception(['3', '2', '5', '40']);