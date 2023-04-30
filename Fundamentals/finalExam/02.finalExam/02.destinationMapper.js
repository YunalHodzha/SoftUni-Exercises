function mapper(text) {
    let pattern = /([=|\/])(?<location>[A-Z]+[A-Za-z]{2,})\1/g;
    let map = [];
    let sum = 0;

    while ((validLocation = pattern.exec(text)) !== null) {
        let current = validLocation.groups.location;
        map.push(current);
        sum += current.length;
    }

    console.log(`Destinations: ${map.join(", ")}`);
    console.log(`Travel Points: ${sum}`);
}

mapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log("-------------");
mapper("ThisIs some InvalidInput");