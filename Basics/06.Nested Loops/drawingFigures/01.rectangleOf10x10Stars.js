function rectangle() {
    let figure = "";

    for (let i=1; i<= 10; i++) {
        for (let i2 = 1; i2<= 10; i2++) {
            figure += `*`;
            if (i2 == 10) {
                figure += `\n`
            }
        }
    }
    console.log(figure)
}

rectangle()