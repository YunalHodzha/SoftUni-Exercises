const expect = require("chai").expect;
const lottery = require("./Lottery");

describe("Tests", function () {
    describe("buyLotteryTicket", function () {
        it("should throw invalid input error for invalid inputs", function () {
            let ticketPrice = 5;
            let ticketCount = 2
            let buy = "true";

            let ticketPrice2 = 6;
            let ticketCount2 = "2"
            let buy2 = true;

            let ticketPrice3 = "2";
            let ticketCount3 = 6
            let buy3 = true;

            let ticketPrice4 = 0;
            let ticketCount4 = 6;

            let ticketPrice5 = 1;
            let ticketCount5 = 0;

            let result1 = () => lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);
            let result2 = () => lottery.buyLotteryTicket(ticketPrice2, ticketCount2, buy2);
            let result3 = () => lottery.buyLotteryTicket(ticketPrice3, ticketCount3, buy3);
            let result4 = () => lottery.buyLotteryTicket(ticketPrice4, ticketCount4, buy3);
            let result5 = () => lottery.buyLotteryTicket(ticketPrice5, ticketCount5, buy3);



            expect(result1).to.throw(Error, "Invalid input!");
            expect(result2).to.throw(Error, "Invalid input!");
            expect(result3).to.throw(Error, "Invalid input!");
            expect(result4).to.throw(Error, "Invalid input!");
            expect(result5).to.throw(Error, "Invalid input!");
        })

        it("should throw Unable to buy lottery ticket!, if buy argument is false", function () {
            let ticketPrice = 5;
            let ticketCount = 2
            let buy = false;

            let result1 = () => lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);

            expect(result1).to.throw(Error, "Unable to buy lottery ticket!");
        })

        it("should return correct message, if all the input is correct", function () {
            let ticketPrice = 5;
            let ticketCount = 2
            let buy = true;

            let result = lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);

            expect(result).to.be.equal(`You bought 2 tickets for 10$.`);
        })
    })

    describe("checkTicket", function () {
        it("should throw an error if invalid parameters are passed", function () {
            let ticketNumbers = "[1,2,3]";
            let luckyNumbers = [1, 2, 3];

            let ticketNumbers2 = [1, 2, 3];
            let luckyNumbers2 = "[1,2,3]";

            let ticketNumbers3 = [1, 2, 3, 4, 5, 6];
            let luckyNumbers3 = [1, 2, 3, 4, 5, 6, 7];

            let ticketNumbers4 = [1, 2, 3, 4, 5];
            let luckyNumbers4 = [1, 2, 3, 4, 5, 6];

            let ticketNumbers5 = [1, 2, 3, 4, 5, 7];
            let luckyNumbers5 = [1, 2, 3, 4, 5];


            let result = () => lottery.checkTicket(ticketNumbers, luckyNumbers);
            let result2 = () => lottery.checkTicket(ticketNumbers2, luckyNumbers2);
            let result3 = () => lottery.checkTicket(ticketNumbers3, luckyNumbers3);
            let result4 = () => lottery.checkTicket(ticketNumbers4, luckyNumbers4);
            let result5 = () => lottery.checkTicket(ticketNumbers5, luckyNumbers5);

            expect(result).to.throw(Error, "Invalid input!");
            expect(result2).to.throw(Error, "Invalid input!");
            expect(result3).to.throw(Error, "Invalid input!");
            expect(result4).to.throw(Error, "Invalid input!");
            expect(result5).to.throw(Error, "Invalid input!");
        })

        it("should return a correct message if number is 7", function () {
            let ticketNumbers3 = [1, 2, 3, 4, 5, 6];
            let luckyNumbers3 = [1, 2, 3, 4, 5, 6];

            let result = lottery.checkTicket(ticketNumbers3, luckyNumbers3);

            expect(result).to.be.equal("You win the JACKPOT!!!");
        });

        it("should return if there is from 3 to 5 winning numbers", function () {
            let ticketNumbers1 = [1, 10, 3, 20, 5, 30];
            let luckyNumbers1 = [1, 2, 3, 4, 5, 6];

            let result = lottery.checkTicket(ticketNumbers1, luckyNumbers1);

            expect(result).to.be.equal("Congratulations you win, check your reward!");
        })
    })

    describe("secondChance", function () {
        it("should throw error if invalid input", function () {
            let ticketID = "123";
            let secondChanceWinningIDs = [1, 2, 3]

            let ticketID2 = 123
            let secondChanceWinningIDs2 = "[1,2,3]";

            let result = () => lottery.secondChance(ticketID, secondChanceWinningIDs);
            let result2 = () => lottery.secondChance(ticketID2, secondChanceWinningIDs2);

            expect(result).to.throw(Error, "Invalid input!");
            expect(result2).to.throw(Error, "Invalid input!");
        })

        
    })
})