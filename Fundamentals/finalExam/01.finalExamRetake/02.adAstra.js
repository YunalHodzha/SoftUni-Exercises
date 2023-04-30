function adAstra(info) {
    let pattern = /([|#])(?<itemName>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[\d]+)\1/g;
    let totalCalories = 0;

    let foods = [];

    while ((validItem = pattern.exec(info)) !== null) {
        foods.push(validItem);
        totalCalories += Number(validItem.groups.calories);
    }

    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);

    for (el of foods) {
        console.log(`Item: ${el.groups.itemName}, Best before: ${el.groups.date}, Nutrition: ${el.groups.calories}`);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log("------------");
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log("------------");
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);