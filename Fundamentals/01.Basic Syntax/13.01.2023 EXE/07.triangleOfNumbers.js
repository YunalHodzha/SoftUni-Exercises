function triangle(num) {
    let figure = "";

    for(i=1; i<=num; i++) {
        figure += `${i} `.repeat(i);
        figure += `\n`;
    }
    console.log(figure);
}

triangle(6)