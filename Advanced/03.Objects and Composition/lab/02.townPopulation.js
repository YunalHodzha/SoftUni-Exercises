function solve(arr) {
    let obj = {};

    for (let line of arr) {
        let [city, population] = line.split(" <-> ");
        population = Number(population);

        if (obj[city] !== undefined) {
            population += obj[city];
        }
        obj[city] = population;
    }

    let cities = Object.entries(obj);
    cities.forEach((city) => console.log(`${city[0]} : ${city[1]}`));
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
console.log("-----------");
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);