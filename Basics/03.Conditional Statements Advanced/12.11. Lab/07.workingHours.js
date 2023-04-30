function workingHours(input) {
    let hours = Number(input[0]);
    let day = input[1];

    if (hours >= 10 && hours < 18) {
        switch (day) {
            case "Monday":
                console.log("open"); break;
            case "Tuesday":
                console.log("open"); break;
            case "Wednesday":
                console.log("open"); break;
            case "Thursday":
                console.log("open"); break;
            case "Friday":
                console.log("open"); break;
            case "Saturday":
                console.log("open"); break;
            default:
                console.log("closed"); break;
        }
    }else {
        console.log("closed");
    }
}

workingHours(["11", "Sunday"])