function ladybugs(input) {
    let fieldSize = input[0];
    let field = new Array(fieldSize).fill(0);
    let initialPositions = input[1].split(" ").map(Number);
    for (let i = 0; i < initialPositions.length; i++) {
        if (initialPositions[i] >= 0 && initialPositions[i] < fieldSize) {
            field[initialPositions[i]] = 1;
        }
    }
    for (let i = 2; i < input.length; i++) {
        let command = input[i].split(" ");
        let index = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);
        if (index < 0 || index >= fieldSize) {
            continue;
        }
        if (field[index] === 0) {
            continue;
        }
        field[index] = 0;
        let newIndex = direction === "right" ? index + flyLength : index - flyLength;
        while (newIndex >= 0 && newIndex < fieldSize) {
            if (field[newIndex] === 1) {
                newIndex = direction === "right" ? newIndex + flyLength : newIndex - flyLength;
            } else {
                field[newIndex] = 1;
                break;
            }
        }
    }
    console.log(field.join(" "));
 }

ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]


)
