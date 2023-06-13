const expect = require("chai").expect;
const weddingDay = require("./weddingDay")

describe("Tests", function () {
    describe("pickVenue", function () {
        it("should throw an Error for an invalid capacity input", function () {
            let capacity = '123';
            let pricePerGuest = 10;
            let location = "Varna";

            let resulFunq = () => weddingDay.pickVenue(capacity, pricePerGuest, location);

            expect(resulFunq).to.throw(Error, "Invalid Information!");
        })

        it("should throw an Error for an invalid pricePerGuest input", function () {
            let capacity = 300
            let pricePerGuest = "10";
            let location = "Varna";

            let resulFunq = () => weddingDay.pickVenue(capacity, pricePerGuest, location);

            expect(resulFunq).to.throw(Error, "Invalid Information!");
        })

        it("should throw an Error for an invalid location input", function () {
            let capacity = 300
            let pricePerGuest = 10;
            let location = ["Varna"];
            let location2 = "";

            let resulFunq = () => weddingDay.pickVenue(capacity, pricePerGuest, location);
            let resulFunq2 = () => weddingDay.pickVenue(capacity, pricePerGuest, location2);

            expect(resulFunq).to.throw(Error, "Invalid Information!");
            expect(resulFunq2).to.throw(Error, "Invalid Information!");
        })

        it("should throw an Error for an different location input than Varna", function () {
            let capacity = 300
            let pricePerGuest = 10;
            let location = "Burgas";

            let resulFunq = () => weddingDay.pickVenue(capacity, pricePerGuest, location);

            expect(resulFunq).to.throw(Error, "The location of this venue is not in the correct area!");
        })

        it("should return if capacity is equal or higher than 150 and pricePerGuest is equal or lower than 120 correct message", function () {
            let capacity = 150;
            let pricePerGuest = 120;
            let location = "Varna";

            let result = weddingDay.pickVenue(capacity, pricePerGuest, location);

            expect(result).to.be.equal(`This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`)
        })

        it("should return correct message if capacity or priceperguest is not in the range", function () {
            let capacity = 149;
            let pricePerGuest = 120;
            let location = "Varna";
            let capacity2 = 150;
            let pricePerGuest2 = 121;

            let result = weddingDay.pickVenue(capacity, pricePerGuest, location);
            let result2 = weddingDay.pickVenue(capacity2, pricePerGuest2, location);

            expect(result).to.be.equal("This venue does not meet your requirements!");
            expect(result2).to.be.equal("This venue does not meet your requirements!");
        })
    })

    describe("otherSpendings", function () {
        it("should throw an Error if one of the inputs are invalid", function () {
            let weddingDecoration = '123';
            let photography = [1, 2, 3];
            let discount = true;

            let weddingDecoration2 = [1, 2, 3];
            let photography2 = '123';
            let discount2 = false;

            let weddingDecoration3 = [1, 2, 3]
            let photography3 = [1, 2, 3];
            let discount3 = "true";

            let result = () => weddingDay.otherSpendings(weddingDecoration, photography, discount);
            let result2 = () => weddingDay.otherSpendings(weddingDecoration2, photography2, discount2);
            let result3 = () => weddingDay.otherSpendings(weddingDecoration3, photography3, discount3);

            expect(result).to.throw(Error, "Invalid Information!")
            expect(result2).to.throw(Error, "Invalid Information!")
            expect(result3).to.throw(Error, "Invalid Information!")

        })

        it("should", function () {
            let weddingDecoration = ["flowers", "Fabric drapes and curtains"];
            let photography = ["pictures", "video"];
            let discount = true;
            let discount2 = false;

            let result = weddingDay.otherSpendings(weddingDecoration, photography, discount);
            let result2 = weddingDay.otherSpendings(weddingDecoration, photography, discount2);

            expect(result).to.be.equal("You spend 2465$ for wedding decoration and photography with 15% discount!");
            expect(result2).to.be.equal("You spend 2900$ for wedding decoration and photography!");

        })
    })

    describe("tableDistribution", function () {
        it("should throw error for invalid input", function () {
            let guests = "123";
            let tables = 100;
            let guests2 = -123;
            let tables2 = -100;

            let result = () => weddingDay.tableDistribution(guests, tables);
            let result2 = () => weddingDay.tableDistribution(guests2, tables2);

            expect(result).to.throw(Error, "Invalid Information!")
            expect(result2).to.throw(Error, "Invalid Information!")
        })

        it("should", function () {
            let guests = 100;
            let table = 50;
            let guests2 = 300;
            let table2 = 20;

            let result = weddingDay.tableDistribution(guests, table);
            let result2 = weddingDay.tableDistribution(guests2, table2);

            expect(result2).to.be.equal(`You have ${table2} tables with ${Math.round(guests2/table2)} guests on table.`);
            expect(result).to.be.equal(`There is only ${Math.round(guests/table)} people on every table, you can join some tables.`)
        })
    })
})