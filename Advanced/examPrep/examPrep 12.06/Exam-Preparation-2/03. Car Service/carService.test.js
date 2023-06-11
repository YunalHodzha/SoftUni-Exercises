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

        it("should return correct message, if number of parts are less or equal to 2", function () {
            let parts = 2;
            let parts1 = 1;

            let result1 = carService.discount(parts, 100);
            let result2 = carService.discount(parts1, 100);

            expect(result1).to.be.equal("You cannot apply a discount");
            expect(result2).to.be.equal("You cannot apply a discount");
        })

        it("should return correct message with discount message for the total price", function () {
            let parts = 7;
            //Discount applied! You saved 15$
            let parts2 = 8;
            //Discount applied! You saved 30$

            let result = carService.discount(parts, 100);
            let result2 = carService.discount(parts2, 100);

            expect(result).to.be.equal("Discount applied! You saved 15$");
            expect(result2).to.be.equal("Discount applied! You saved 30$")
        })
    })
    describe("partsToBuy", function () {
        it("should throw an Error if inputs are not arrays", function () {
            let firstInput = "1,2,3";
            let secondInput = [1, 2, 3];
            let firstInput2 = [1, 2, 3];
            let secondInput2 = {};

            let resul1Func = () => carService.partsToBuy(firstInput, secondInput);
            let resul2Func = () => carService.partsToBuy(firstInput2, secondInput2);

            expect(resul1Func).to.throw(Error, "Invalid input");
            expect(resul2Func).to.throw(Error, "Invalid input");
        })

        it("should return 0 if partsCatalog array is empty", function () {
            let catalog = [];
            let neededPart = ["blowoff valve", "injectors"];

            let result = carService.partsToBuy(catalog, neededPart);

            expect(result).to.be.equal(0);
        })

        it("should return the correct total sum", function () {
            let partsCatalog = ([{
                part: "blowoff valve", price: 145
            }, { part: "coil springs", price: 230 }, { part: "windshield", price: 300 }]);
            let neededParts = ["blowoff valve", "windshield"];

            let result = carService.partsToBuy(partsCatalog, neededParts);

            expect(result).to.be.equal(445);
        })
    })
});