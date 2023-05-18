function calorieObject(arr) {
    let foods = {};

    for (let i = 0; i < arr.length; i += 2) {
        let food = arr[i];
        let calories = Number(arr[i+1]);

        foods[food] = calories;
    }
    console.log(foods);
}

calorieObject(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52']);
console.log("---------------");

calorieObject(['Potato', '93', 'Skyr', '63',
    'Cucumber', '18', 'Milk', '42']);