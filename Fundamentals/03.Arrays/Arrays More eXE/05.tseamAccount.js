function steamAccount(arr) {
    let myAcc = arr[0];
    myAcc = myAcc.split(" ");
    arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i].split(" ");
        let command = commands[0];
        let game = commands[1];

        switch (command) {
            case "Install":
                if (myAcc.includes(game)) {
                    break;
                } else {
                    myAcc.push(game);
                }
                break;
            case "Uninstall":
                if (myAcc.includes(game)) {
                    let index = myAcc.indexOf(game);
                    if (index > -1) {
                        myAcc.splice(index, 1);
                    } else {
                        break;
                    }
                    break;
                }
            case "Update":
                if (myAcc.includes(game)) {
                    let index = myAcc.indexOf(game);
                    if (index > -1) {
                        myAcc.splice(index, 1);
                        myAcc.push(game);
                    } else {
                        break;
                    }
                    break;
                }
            case "Expansion":
                let gameExp = game.split("-");
                let updatingGame = gameExp[0];

                if (myAcc.includes(updatingGame)) {
                    let index = myAcc.indexOf(updatingGame);
                    myAcc.splice(index + 1, 0, gameExp.join(":"));
                } else {
                    break;
                }
                break;
            case "Play!":
                console.log(myAcc.join(" "));
                break;
        }
    }
}
steamAccount([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);

console.log("--------------");

steamAccount([
    'CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'
]);