function solve() {

    class Balloon {
        constructor(color, number) {
            this.color = color;
            this.gasWeight = number;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, number, ribbonColor, ribbonLength) {
            super(color, number);

            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }


        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, number, ribbonColor, ribbonLength, text) {
            super(color, number, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text() {
            return this._text;
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
}

let classes = solve();
let test = new classes.Balloon("Tumno-bqlo", 20.5);
console.log(test)


let testBalloon = new classes.Balloon(
    "yellow", 20.5);
let testPartyBalloon = new
    classes.PartyBalloon("yellow", 20.5,
        "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);