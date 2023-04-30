function harvest(input) {
    let landArea = Number(input[0]);
    let grapesForM2 = Number(input[1]);
    let vineLitresNeeded = Number(input[2]);
    let workersCount = Number(input[3]);

    let harvestForVine = landArea * 0.40;
    let grapesKg = harvestForVine * grapesForM2;
    let totalVine =  grapesKg / 2.5;

    if(totalVine < vineLitresNeeded) {
        let moreLitresNeeded = Math.floor(vineLitresNeeded - totalVine);
        console.log(`It will be a tough winter! More ${moreLitresNeeded} liters wine needed.`)
    } else if (totalVine >= vineLitresNeeded) {
        let vineLeft = (totalVine - vineLitresNeeded);
        let vineForPerson = (vineLeft / workersCount);
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalVine)} liters.`)
        console.log(`${Math.ceil(vineLeft)} liters left -> ${Math.ceil(vineForPerson)} liters per person.`)
    }
}

harvest(["650", "2", "175", "3"])