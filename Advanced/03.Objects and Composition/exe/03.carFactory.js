function carFactory(order) {
    let engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }

    let result = {};

    result.model = order.model;
    let power = order.power;

    if (power <= 90) {
        result.engine = engines.small;
    } else if (power <= 120) {
        result.engine = engines.normal;
    } else {
        result.engine = engines.monster;
    };

    result.carriage = { type: order.carriage, color: order.color };

    let wheelsSize = Math.floor(order.wheelsize);
    if (wheelsSize % 2 === 0) {
        wheelsSize--;
    }

    let wheels = [0, 0, 0, 0];
    wheels = wheels.fill(wheelsSize, 0, 4);

    result.wheels = wheels;

    return result;
}

const order1 = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};

const order2 = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
};

carFactory(order1);
carFactory(order2);