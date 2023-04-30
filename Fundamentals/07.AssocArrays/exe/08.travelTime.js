function travelTime(data) {
    let flights = new Map;
    let currentPrice = 0;

    for (let info of data) {
        let [country, town, price] = info.split(" > ");

        if (!flights.has(country)) {
            flights.set(country, new Map());
            flights.get(country).set(town, Number(price));
        }
        if (!flights.get(country).has(town)) {
            flights.get(country).set(town, Number(price))
            currentPrice = price;
        }
        if (flights.get(country).has(town)) {
            if (currentPrice > price) {
                flights.get(country).set(town, Number(price))
            }
        } else {
            if (currentPrice > price) {
                flights.get(country).set(town, Number(price))
            }
        }
    }

    let orderedList = Array.from(flights).sort((a, b) => a[0].localeCompare(b[0]));
    let result = "";

    for (let info of orderedList) {
        result += [info[0]] + " -> ";
        let townArray = Array.from(info[1]).sort((a, b) => a[1] - b[1])

        for (let info of townArray) {
            let townInfo = "";
            townInfo = `${info[0]} -> ${info[1]}`;
            result += `${townInfo} `;
        }
        result += `\n`;
    }
    console.log(result.trim())
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);
console.log("-------------");
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10']);