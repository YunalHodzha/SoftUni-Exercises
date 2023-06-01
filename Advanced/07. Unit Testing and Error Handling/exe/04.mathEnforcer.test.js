const { expect } = require("chai");
const { mathEnforcer } = require("./04.mathEnforcer");

describe("mathEnforcer", function () {
    describe("addFive", function () {
        it("should return correct result with a non-number parameter", function () {
            let input = "Hello";

            let result = mathEnforcer.addFive(input);

            expect(result).to.be.undefined;
        })

        it("should return correct result with negative numbers", () => {
            let input = -5;

            let result = mathEnforcer.addFive(input);

            expect(result).to.be.equal(0);
        })

        it("should return correct result with floating-point numbers", () => {
            let input = 5.5;

            let result = mathEnforcer.addFive(input);

            expect(result).to.be.closeTo(10.5, 0.01);
        })
    })

    describe("subtractTen", function () {
        it("should return correct result with a non-number parameter", function () {
            let input = "Hello";

            let result = mathEnforcer.subtractTen(input);

            expect(result).to.be.undefined;
        })

        it("should return correct result with negative numbers", () => {
            let input = -5;

            let result = mathEnforcer.subtractTen(input);

            expect(result).to.be.equal(-15);
        })

        it("should return correct result with floating-point numbers", () => {
            let input = 5.5;

            let result = mathEnforcer.subtractTen(input);

            expect(result).to.be.closeTo(-4.5, 0.01);
        })
    });

    describe("sum", function () {
        it("should return correct result with a non-number parameter", function () {
            let input1 = "Hello";
            let input2 = 1;
            let input3 = 4;
            let input4 = "2";

            let result = mathEnforcer.sum(input1, input2);
            let resul2 = mathEnforcer.sum(input3, input4)

            expect(result).to.be.undefined;
            expect(resul2).to.be.undefined;
        })

        it("should return correct result with negative numbers", () => {
            let input = -5;
            let input2 = -5

            let input3 = 5;
            let input4 = -20;

            let result = mathEnforcer.sum(input, input2);
            let resul2 = mathEnforcer.sum(input3, input4);

            expect(result).to.be.equal(-10);
            expect(resul2).to.be.equal(-15);
        })

        it("should return correct result with floating-point numbers", () => {
            let input = 5.5;
            let input2 = -2.7;

            let result = mathEnforcer.sum(input, input2);

            expect(result).to.be.closeTo(2.8, 0.01);
        })
    });
})