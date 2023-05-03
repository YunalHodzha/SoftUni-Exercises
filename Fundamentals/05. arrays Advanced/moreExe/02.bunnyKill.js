function bunnyKill(matrix) {
    let coordinates = matrix.pop().split(" ");
    let damageDone = 0;
    let bunniesKilled = 0;

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(" ");
        matrix[i] = matrix[i].map((el) => Number(el));
    };


    for (let i = 0; i < coordinates.length; i++) {
        let [a, b] = coordinates[i].split(",");
        a = Number(a);
        b = Number(b);
        let bombValue = matrix[a][b];

        matrix[a][b - 1] !== undefined ? matrix[a][b - 1] -= bombValue : matrix[a][b - 1];
        matrix[a][b - 1] < 0 ? matrix[a][b - 1] = 0 : matrix[a][b - 1];

        matrix[a][b + 1] !== undefined ? matrix[a][b + 1] -= bombValue : matrix[a][b + 1];
        matrix[a][b + 1] < 0 ? matrix[a][b + 1] = 0 : matrix[a][b + 1];

        if (a > 0) {
            matrix[a - 1][b] !== undefined ? matrix[a - 1][b] -= bombValue : matrix[a - 1][b];
            matrix[a - 1][b] < 0 ? matrix[a - 1][b] = 0 : matrix[a - 1][b];

            matrix[a - 1][b - 1] !== undefined ? matrix[a - 1][b - 1] -= bombValue : matrix[a - 1][b - 1];
            matrix[a - 1][b - 1] < 0 ? matrix[a - 1][b - 1] = 0 : matrix[a - 1][b - 1];

            matrix[a - 1][b + 1] !== undefined ? matrix[a - 1][b + 1] -= bombValue : matrix[a - 1][b + 1];
            matrix[a - 1][b + 1] < 0 ? matrix[a - 1][b + 1] = 0 : matrix[a - 1][b + 1];

        }

        if (a < matrix.length - 1) {

            matrix[a + 1][b] !== undefined ? matrix[a + 1][b] -= bombValue : matrix[a + 1][b];
            matrix[a + 1][b] < 0 ? matrix[a + 1][b] = 0 : matrix[a + 1][b];

            matrix[a + 1][b - 1] !== undefined ? matrix[a + 1][b - 1] -= bombValue : matrix[a + 1][b - 1];
            matrix[a + 1][b - 1] < 0 ? matrix[a + 1][b - 1] = 0 : matrix[a + 1][b - 1];

            matrix[a + 1][b + 1] !== undefined ? matrix[a + 1][b + 1] -= bombValue : matrix[a + 1][b + 1];
            matrix[a + 1][b + 1] < 0 ? matrix[a + 1][b + 1] = 0 : matrix[a + 1][b + 1];
        }

        damageDone += matrix[a][b];
        if (matrix[a][b] > 0) {
            matrix[a][b] = 0;
            bunniesKilled++;
        }
    };

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            let value = matrix[i][j];

            if (value !== 0) {
                damageDone += value;
                bunniesKilled++;
            }
        }
    }
    console.log(damageDone);
    console.log(bunniesKilled);
};



"3+3"

bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 2,3 0,1']

);
console.log("----------------");
bunnyKill([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,1']);