function test(arr) {
    let myArr = [];

    class Car {
        constructor(name, model, year) {
            this.name = name
            this.model = model
            this. year = year
        }
    }

    for(let line of arr) {
        let [name, model, year] = line.split(" ");
        let car = new Car(name, model, year);
        myArr.push(car);
    }

    let newName = "Ford";
    let oldName = "Honda";

    myArr.keys(keys[oldName]) = newName;
    console.table(myArr)
}

test(["Honda Civic 1990", "Opel Kadet 2020", "BMW M6 2010"]);

