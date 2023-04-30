function solve(pages, pagesPerHour, daysNeeded) {
    let totalTime = pages / pagesPerHour;
    let hoursNeeded =  totalTime / daysNeeded;
    console.log(hoursNeeded);
}

solve(432,
    15 ,
    4 
    )