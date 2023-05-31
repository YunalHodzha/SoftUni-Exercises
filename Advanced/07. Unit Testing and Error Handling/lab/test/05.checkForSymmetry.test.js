const { expect } = require("chai");
const { isSymmetric } = require("./test");

describe("isSymetric", function () {
    it("should return false if input is not array", () => {
        let input = "Not array";

        let result = isSymmetric(input);

        expect(result).to.be.false;
    })

    it("should return true if input is a symmetric array", () => {
        let input = [3, 2, 3];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    })

    it("should return false if input array is not symmetric", () => {
        let input = [1, 2, 3];

        let result = isSymmetric(input);

        expect(result).to.be.false;
    })

    it("should return true if input array has 0 length", () => {
        let input = [];

        let result = isSymmetric(input);

        expect(result).to.be.true
    })

    it("should return false if input array have mixed types", () => {
        let input = ["1", 2, 1];

        let result = isSymmetric(input);

        expect(result).to.be.false;
    })
})