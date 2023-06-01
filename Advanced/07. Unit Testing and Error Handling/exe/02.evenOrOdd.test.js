const {expect} = require("chai");
const {isOddOrEven} = require("./02.evenOrOdd");

describe ("evenOrOdd", function () {
    it("should return undefined if input is not string", () => {
        let input = 23;

        let result = isOddOrEven(input);

        expect(result).to.be.undefined;
    })

    it("should return even when input is even number of length strin", () => {
        let input = 'Hi';

        let result = isOddOrEven(input);

        expect(result).to.be.equal("even");
    })

    it("should return odd when input is odd number of length strin", () => {
        let input = 'Hello';

        let result = isOddOrEven(input);

        expect(result).to.be.equal("odd");
    })
})