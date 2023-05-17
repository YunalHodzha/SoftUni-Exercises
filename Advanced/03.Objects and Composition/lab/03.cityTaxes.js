function cityTaxes(name, population, treasury) {
    let obj = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },

        applyGrowth(percent) {
            this.population += this.population * percent / 100;
        },

        applyRecession(percent) {
            this.treasury -= this.treasury * percent / 100;
        }
    };
    return obj;
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);

console.log(city);

console.log("-----------------");

const city2 =
 cityTaxes('Tortuga',
 7000,
 15000);
city2.collectTaxes();
console.log(city2.treasury);
city2.applyGrowth(5);
console.log(city2.population);
