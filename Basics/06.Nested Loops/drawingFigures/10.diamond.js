function diamond(input) {
    let n = Number(input[0]);

    let figure = "";
    let leftRight = "-".repeat(Math.floor((n-1)/2));
    let counter = 1;

    let mid = "";
    if(n % 2 === 0) {
        mid += "-".repeat(2);
    }else {
        mid += "-";
    }

    for ( let i = 0; i <= Math.ceil((n/2)-1); i++) {
        if (i == 0) {
            if (n % 2 === 0) {
                figure += leftRight;
                figure += "*".repeat(2);
                figure += leftRight;
                figure += `\n`;
                counter++;
                continue;
            }else {
                figure += leftRight;
                figure += "*";
                figure += leftRight;
                figure += `\n`;
                counter++;
                continue;
            }
        }
        
        leftRight = "-".repeat(Math.round((n-counter)/2)-1);
        figure += leftRight;
        figure += "*";
        figure += mid;
        figure += "*";
        figure += leftRight;
        figure += `\n`;

        mid += "-".repeat(2)
        counter++;



    }
    console.log(figure)
}

diamond(["7"])