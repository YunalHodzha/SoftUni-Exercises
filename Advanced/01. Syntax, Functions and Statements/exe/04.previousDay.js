function previousDay(year, month, day) {
    let date = new Date(year, month -1, day);
    date.setDate(date.getDate() -1);

    day = date.getDate();
    month = date.getMonth() +1;
    year = date.getFullYear();


    console.log(`${year}-${month}-${day}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);