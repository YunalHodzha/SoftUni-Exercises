function nXnMatric(n) {
    let matrix = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            matrix += `${n} `;
        }
        matrix += i !== n ? `\n` :   
    }
    console.log(matrix)
}

nXnMatric(7)