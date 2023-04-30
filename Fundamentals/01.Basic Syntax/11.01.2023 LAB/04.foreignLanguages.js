function solve(language) {
    if (language == "USA" || language == "England") {
        console.log("English");
    } else if (language == "Spain" || language == "Argentina" || language == "Mexico") {
        console.log("Spanish");
    } else {
        console.log("unknown")
    }
}

solve("Germany")


function solve(language) {
    switch (language) {
        case "USA":
        case "England":
            console.log("English");
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log("Spanish");
            break;
        default:
            console.log("uknown");
    }
}

solve("Germany")