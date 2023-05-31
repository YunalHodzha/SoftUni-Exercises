function printDeckOfCards(cards) {
    let result = [];
    let notValid = false;

    function createCard(face, suit) {
        let myCard = face.concat(suit);

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', "Q", "K", "A"];
        const validSuits = ["S", "H", "D", "C"];

        if (validFaces.indexOf(face) == -1) {
            console.log(`Invalid card: ${myCard}`);
            notValid = true;
            return;
        }

        if (validSuits.indexOf(suit) == -1) {
            console.log(`Invalid card: ${myCard}`);

            notValid = true;
            return;
        }

        switch (suit) {
            case "S": suit = "\u2660"; break;
            case "H": suit = "\u2665"; break;
            case "D": suit = "\u2666"; break;
            case "C": suit = "\u2663"; break;
        }

        return {
            face: face,
            suit: suit,
            toString() {
                return this.face + this.suit;
            }
        };
    }

    for (let card of cards) {

        if (card.length === 3) {
            card = card.split("");
            suit = card.pop();
            face = card[0].concat(card[1]);
        } else {
            [face, suit] = card.split("");
        }


        let current = createCard(face, suit);
        if (notValid) {
            return;
        }
        result.push(current);
    }
    if (notValid === false) {
        console.log(result.join(" "));
    }
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);