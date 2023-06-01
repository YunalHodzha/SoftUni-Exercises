const { expect } = require("chai");
const { lookupChar } = require("./03.charLookup");

describe("function that looks char at given index in given string", function () {
    it("should return undefined if given string input is invalid", () => {
        let string = [1, 2, 3];
        let index = 3;

        let result = lookupChar(string, index);

        expect(result).to.be.undefined;
    })

    it("should return undefined if given index input is floating number", () => {
        let string = "Hello";
        let index = 3.2;

        let result = lookupChar(string, index);

        expect(result).to.be.undefined;
    })

    it("should return undefined if given index input is invalid", () => {
        let string = "Hello";
        let index = "8";
        

        let result = lookupChar(string, index);

        expect(result).to.be.undefined;
    })

    it("should return Incorrect index if value of index is bigger than the string range or negative index number", () => {
        let string = "Hello";
        let index1 = 18;

        let result1 = lookupChar(string, index1);
    
        expect(result1).to.be.equal("Incorrect index");
    })

    it("should return Incorrect index if value of index is bigger than the string range or negative index number", () => {
        let string = "Hello";
        let index2 = -3;

        let result2 = lookupChar(string, index2);

        expect(result2).to.be.equal("Incorrect index");

    })



    it("should return string character at given index when inputs are correct", () => {
        let string = "Hello";
        let index = 1;

        let result = lookupChar(string, index);

        expect(result).to.be.equal("e");
    })
})