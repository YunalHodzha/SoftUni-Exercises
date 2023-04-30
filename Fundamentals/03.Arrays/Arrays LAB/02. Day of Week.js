function dayOfWeek(n) {
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (n > 0 && n <= 7) {
        console.log(daysOfWeek[n - 1]);
    } else {
        console.log("Invalid day!")
    }
}

dayOfWeek(0)