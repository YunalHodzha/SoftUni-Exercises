function solutin(input) {
    let result = [];

    myFuncs = {
        add: (el) => result.push(el),
        remove: function (el) {
            result = result.filter((item) => item !== el)
        },
        print: () => console.log(result.join(",")),
    }

    for (let data of input) {
        let [command, element] = data.split(" ");
        if (element !== undefined) {
            myFuncs[command](element);
        } else {
            myFuncs[command]();
        }
    }
}

solutin(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])