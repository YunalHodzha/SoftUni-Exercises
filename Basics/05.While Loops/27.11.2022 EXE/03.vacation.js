function holiday(input) {
    let index = 0;
    let holidayPrice = Number(input[index]);
    index++;

    let monayAvaliable = Number(input[index]);
    index ++;

    let moneySpentDays = 0;
    let savingDays = 0;

    while (monayAvaliable < holidayPrice) {
        savingDays++
        switch (input[index]) {
            case "spend":
                index++;
                monayAvaliable -= Number(input[index]);
                    if(monayAvaliable < 0) {
                        monayAvaliable = 0;
                    }
                moneySpentDays++;
                    if (moneySpentDays === 5) {
                        console.log(`You can't save the money.`);
                        console.log(`${savingDays}`);
                        return;
                    }
                index++;
                continue;
            case "save":
                index++;
                monayAvaliable += Number(input[index]);
                moneySpentDays = 0;
                index++;
                continue;
        }
    }
    console.log(`You saved the money for ${savingDays} days.`);
}

holiday(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])






























