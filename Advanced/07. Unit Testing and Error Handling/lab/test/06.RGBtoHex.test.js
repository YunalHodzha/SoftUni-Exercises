const { expect } = require("chai");
const { RGBtoHex, rgbToHexColor } = require("./test");

describe("rgbToHex", function () {
    it("with non integer red, should throw Error", function () {
        let red = {};
        let blue = 100;
        let green = 100;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it("with non integer green, should throw Error", function () {
        let red = 100
        let blue = 100;
        let green = {};

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it("with non integer blue, should throw Error", function () {
        let red = 100;
        let blue = {};
        let green = 100;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it("with non valid range of input, should return undefined", function () {
        let red = 256;
        let blue = 255;
        let green = 254;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it("with non valid range of input, should return undefined", function () {
        let red = 256;
        let blue = 255;
        let green = -23;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it("should return hexadecimal format as a string", function () {
        let red = 100;
        let green = 100;
        let blue = 100;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.string;
    })

    it("output should be 7 characters long", () => {
        let red = 100;
        let green = 100;
        let blue = 100;

        let result = rgbToHexColor(red, green, blue);
        let resultLength = result.length

        expect(resultLength).to.be.equal(7);
    })
}) 