function solve(input) {
    let windowsCount = Number(input[0]);
    let windowsSize = input[1];
    let delivery = input[2];
    let price = 0;

    let sum = 0;

    switch (windowsSize) {
        case "90X130":
            price = 110;
            sum = windowsCount * price;
            if (windowsCount > 60) {
                sum *= 0.92;
            } else if (windowsCount > 30) {
                sum *= 0.95;
            }
            switch (delivery) {
                case "With delivery":
                    sum += 60;
            }
            if (windowsCount > 99) {
                sum *= 0.96;
            }
            break;
        case "100X150":
            price = 140;
            sum = windowsCount * price;
            if (windowsCount > 80) {
                sum *= 0.90;
            } else if (windowsCount > 40) {
                sum *= 0.94;
            }
            switch (delivery) {
                case "With delivery":
                    sum += 60;
            }
            if (windowsCount > 99) {
                sum *= 0.96;
            }
            break;
        case "130X180":
            price = 190;
            sum = windowsCount * price;
            if (windowsCount > 50) {
                sum *= 0.88;
            } else if (windowsCount > 20) {
                sum *= 0.93;
            }
            switch (delivery) {
                case "With delivery":
                    sum += 60;
            }
            if (windowsCount > 99) {
                sum *= 0.96;
            }
            break;
        case "200X300":
            price = 250;
            sum = windowsCount * price;
            if (windowsCount > 50) {
                sum *= 0.86;
            } else if (windowsCount > 25) {
                sum *= 0.91;
            }
            switch (delivery) {
                case "With delivery":
                    sum += 60;
            }
            if (windowsCount > 99) {
                sum *= 0.96;
            }
            break;
    }
    if (windowsCount < 10) {
        console.log("Invalid order")
    } else {
        console.log(`${sum.toFixed(2)} BGN`);
    }
}

solve(["2",
    "130X180",
    "With delivery"])




