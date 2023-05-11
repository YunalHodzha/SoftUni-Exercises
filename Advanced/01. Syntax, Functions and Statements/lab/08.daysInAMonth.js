function daysInAMonth(month, year) {
    let date = new Date(year, month, 0);
    let day = date.getDate();

    console.log(day)
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);