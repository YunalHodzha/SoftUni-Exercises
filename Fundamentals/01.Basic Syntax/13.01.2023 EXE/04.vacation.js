function vacation(count, groupType, day) {
    price = 0;
    totalPrice = 0;
    switch (day) {
        case "Friday":
            if (groupType == "Students") {
                price = 8.45;
            } else if (groupType == "Business") {
                price = 10.90;
            } else if (groupType == "Regular") {
                price = 15;
            }
            break;
        case "Saturday":
            if (groupType == "Students") {
                price = 9.80;
            } else if (groupType == "Business") {
                price = 15.60;
            } else if (groupType == "Regular") {
                price = 20;
            }
            break;
        case "Sunday":
            if (groupType == "Students") {
                price = 10.46;
            } else if (groupType == "Business") {
                price = 16;
            } else if (groupType == "Regular") {
                price = 22.50;
            }
            break;
    }

    totalPrice = price * count;

    switch (groupType) {
        case "Students":
            if (count >= 30) {
                totalPrice *= 0.85;
            }
            break;
        case "Business":
            if (count >= 100) {
                count -= 10;
                totalPrice = price * count;
            }
            break;
        case "Regular":
            if (count >= 10 && count <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(40, "Regular", "Saturday")