function ladyBugs(arr) {
    let field = new Array(arr[0]).fill(0);

    bugs = (arr[1].split(" ")).map(Number);

    for (let i = 0; i < bugs.length; i++) {
        let index = bugs[i];
        if (index >= 0 && index < field.length) {
            field.splice(index, 1, 1);
        } else {
            continue;
        }
    }


    for (let i = 2; i < arr.length; i++) {
        let commands = arr[i].split(" ");
        let index = Number(commands[0]);
        let direction = commands[1];
        let endIndex = Number(commands[2]);

        if (index < 0 || index > field.length) {
            continue;
        }
        field[index] = 0;
        let newIndex = direction === "right" ? index + endIndex : index - endIndex;
        while (newIndex >= 0 && newIndex < field.length) {
            if (field[newIndex] === 1) {
                newIndex = direction === "right" ? newIndex + endIndex : newIndex - endIndex;
            } else {
                field[newIndex] = 1;
                break;
            }
        }

    }
    console.log(field.join(" "));
}

ladyBugs([5, '3',
    '3 left 2',
    '1 left -2']


)
    ;
