function stars(num) {
    if (num === undefined) {
        num = 5;
    }

    let pattern = '';

    for (let i = 0; i < num; i++) {

        for (let j = 0; j < num; j++) {
            pattern += "* ";
        }
        pattern.trim();
        pattern += `\n`;
    }
    console.log(pattern);
}

stars(1);
stars(2);
stars(5);
stars(7);