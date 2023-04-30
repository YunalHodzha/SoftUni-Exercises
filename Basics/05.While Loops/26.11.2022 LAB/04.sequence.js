function sequence(input) {
    let n = Number(input[0]);
    let counter = 1;

    while (n >= counter) {
        console.log(counter)
        counter = (counter *2) +1;
    }
}

sequence(["31"])