function sallary(input) {
    let openTabs = Number(input[0]);
    let sallary = Number(input[1]);

    for (let i = 0; i <= openTabs; i++) {
        switch (input[i]) {
            case "Facebook":
                sallary -= 150;
                break;
            case "Instagram":
                sallary -= 100;
                break;
            case "Reddit":
                sallary -= 50;
                break;
        }
    }
    if (sallary <= 0) {
        console.log("You have lost your salary.")
    }else {
        console.log(Math.round(sallary))
    }
}


sallary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])






