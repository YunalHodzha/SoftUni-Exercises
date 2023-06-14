const expect = require("chai").expect;
const findNewApartment = require("./findApartment");

describe("tesst", function () {
    describe("isGoodLocation", function () {
        it("should throw Error - invalid input if one of the types are incorrect", function () {
            let city = ["Varna"];
            let transport = true;
            let city2 = "Varna";
            let transport2 = "false";

            let resultFunq = () => findNewApartment.isGoodLocation(city, transport);
            let resultFunq2 = () => findNewApartment.isGoodLocation(city2, transport2);

            expect(resultFunq).to.throw(Error, "Invalid input!");
            expect(resultFunq2).to.throw(Error, "Invalid input!");
        })
    })
})