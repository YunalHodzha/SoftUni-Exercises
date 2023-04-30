function readText(input) {
    let name = input;
    let index = 0;

    while (name[index] !== "Stop") {
        console.log(name[index]);
        index++
    }
}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
