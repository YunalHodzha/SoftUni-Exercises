const { expect } = require("chai");
let { sum } = require("./test");

describe('sum', () => {
        it("should take an array of numbers", function () {
    // Arrange
        let array = [1, 2, 3];
    // Act
        let result = Array.isArray(array);
    // Assert
        expect(result).to.be.true;
        
        });

        it("should have only number elements in the array", function () {
            // Arrange
            let array = [1, 2, 3];

            // Act
            let result =  false;
            for(let number of array) {
                if (typeof number !== "number") {
                    result = true;
                }
            }

            //Assert
            expect(result).to.be.false;
        });

        it("should sum the numbers correctly", function () {
            let array = [1, 2, 3];

            let result = sum(array);

            expect(result).to.be.equal(6);
        })
    });
