const { expect } = require("chai");
const { createCalculator } = require("./07.addsubractFunctionFile");

describe("createCalculator", function () {

    it("should return module(object), containing functions add(), subtract(), get()", () => {
        const calculator = createCalculator();

        expect(calculator).to.be.a("object");
    })

    it("should return 0 for get", () => {
        const calculator = createCalculator();

        let result = calculator.get();

        expect(result).to.be.equal(0);
    })

    it("add function should parse string containing number to Number", () => {
        const calculator = createCalculator();
        let input = "20";

        calculator.add(input);
        let result = calculator.get();
        let type = typeof result;

        expect(type).to.be.equal("number");
    })

    it("subtract function should parse string containing number to Number", () => {
        const calculator = createCalculator();
        let input = "20";

        calculator.subtract(input);
        let result = calculator.get();
        let type = typeof result;

        expect(type).to.be.equal("number");
    })

    it("should return NaN when add string", () => {
        const calculator = createCalculator();
        let input = "ten";

        calculator.add(input);
        result = calculator.get();

        expect(result).to.be.NaN;
    })

    it("should return NaN when subtract string", () => {
        const calculator = createCalculator();
        let input = "ten";

        calculator.subtract(input);
        result = calculator.get();

        expect(result).to.be.NaN;
    })

    it("get() should return the value of the internal sum", () => {
        const calculator = createCalculator();
        let input = 10;

        calculator.add(input);
        let value = calculator.get();

        expect(value).to.be.equal(10);
    })
})