function objectFactory(library, orders) {
    let result = [];

    for (let order of orders) {
        let template = order.template;
        let obj = Object.assign({}, template);

        for (let part of order.parts) {
            obj[part] = library[part];
        }
        result.push(obj);
    }
    return result;
}



const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

objectFactory(library, orders);