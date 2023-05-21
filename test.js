function test() {

    let str = "this is a text";
    str = str.split(" ");

    for(let el of str) {
        console.log(el[0].toUpperCase() + el.slice(1))
    }
}

test()
