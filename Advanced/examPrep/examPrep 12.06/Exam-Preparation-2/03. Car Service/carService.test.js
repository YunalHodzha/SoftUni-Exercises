const { expect } = require("chai");
const { carService } = require("./03. Car Service");

describe("Tests …", function () {
    describe("isItExpensive", function () {
        it("with given two specific inputs, it should return the correct message", function () {
            let myIssue = "Engine";
            let myIssue2 = "Transmission";

            let result = carService.isItExpensive(myIssue);
            let result2 = carService.isItExpensive(myIssue2);


            expect(result).to.be.equal("The issue with the car is more severe and it will cost more money");
            expect(result2).to.be.equal("The issue with the car is more severe and it will cost more money");
        });

        it("should return the correct message for all other input cases", function () {
            let myIssue = "tires";

            let result = carService.isItExpensive(myIssue);

            expect(result).to.be.equal("The overall price will be a bit cheaper");
        })
    });
    describe("discount", function () {
        it("should throw an Error with type of input different from number", function () {
            let parts = "12";
            let price = 100;
            let parts2 = 5;
            let price2 = "400";

            let result1Func = () => carService.discount(parts, price);
            let result2Func = () => carService.discount(parts2, price2);

            //let result1Func = () => bookSelection.isItAffordable(price, 30);
            expect(result1Func).to.throw(Error, "Invalid input");
            expect(result2Func).to.Throw(Error, "Invalid input");
        })
    })
});