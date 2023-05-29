function solve() {
    const obj = {};

    Array.from(arguments).forEach((a) => {
        const type = typeof a;
        console.log(`${type}: ${a}`);

        if(!obj.hasOwnProperty(type)) {
            obj[type] = 0;
        }
        obj[type]++;
    })

    Object.keys(obj)  
        .sort((a, b) => obj[b] - obj[a])
        .forEach((c) => console.log(`${c} = ${obj[c]}`));
}
    

solve('cat', 42, function () { console.log('Hello world!'); })
