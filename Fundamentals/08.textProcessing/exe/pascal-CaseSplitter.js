function processing(input) {
    let result = input[0];

    for (let i = 1; i < input.length; i++) {
        if (input[i] !== input[i].toUpperCase()) {
            result += input[i];
        }
        if (i === input.length - 1) {
            break;
        }

        if (input[i + 1] === input[i + 1].toUpperCase()) {
            result += ` ${input[i + 1]}`;
        }
    }
    console.log(result.split(" ").join(", "));
}

processing('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log("----------");
processing('HoldTheDoor');
console.log("----------");
processing('ThisIsSoAnnoyingToDo');