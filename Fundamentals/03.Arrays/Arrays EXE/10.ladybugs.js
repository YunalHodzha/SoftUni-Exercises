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
        } else {
            if (direction === "right") {
                let bug = field.splice(index, 1, 0);
                if (index + endIndex >= arr[0]) {
                    continue;
                } else {
                    field.splice(index + endIndex, 0, Number(bug));
                    if (field.length > arr[0]) {
                        field.pop();
                    }
                }
            } else if (direction === "left") {
                let bug = field.splice(index, 1, 0);
                if (index - endIndex >= field.length) {
                    continue;
                } else {
                    field.splice(index - endIndex, 0, Number(bug));
                    if (field.length > arr[0]) {
                        field.pop();
                    }
                }
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
