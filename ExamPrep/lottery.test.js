const lottery = require("./lottery");
const { assert, expect } = require("chai");

describe('lottery', () => {
    describe("buyLotteryTickets", () => {
        it('invalid inputs', () => {
            expect(() => { lottery.buyLotteryTicket("string", "test", "test") }).to.throw('Invalid input!');
            expect(() => { lottery.buyLotteryTicket(2, "test", "test") }).to.throw('Invalid input!');
            expect(() => { lottery.buyLotteryTicket("test", 5, "test") }).to.throw('Invalid input!');
            expect(() => { lottery.buyLotteryTicket(1, 5, false) }).to.throw('Unable to buy lottery ticket!');
            expect(() => { lottery.buyLotteryTicket(0, 5, false) }).to.throw('Unable to buy lottery ticket!');
            expect(() => { lottery.buyLotteryTicket(1, 0, false) }).to.throw('Unable to buy lottery ticket!');


        });
        it("valid inputs", () => {
            expect(lottery.buyLotteryTicket(1, 1, true)).to.equal('You bought 1 tickets for 1$.');
            expect(lottery.buyLotteryTicket(15, 2, true)).to.equal('You bought 2 tickets for 30$.');
            expect(lottery.buyLotteryTicket(30, 3, true)).to.equal('You bought 3 tickets for 90$.');
        })
    })

    describe("checkTicket", () => {
        it('invalid inputs', () => {

            expect(() => { lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]) }).to.throw('Invalid input!');
            expect(() => { lottery.checkTicket([1, 2, 3, 4, 5,], [1, 2, 3, 4, 5, 6]) }).to.throw('Invalid input!');
            expect(() => { lottery.checkTicket([1, 2, 3, 4, 5, 6], 1, 2, 3, 4, 5, 6) }).to.throw('Invalid input!');
            expect(() => { lottery.checkTicket(1, 2, 3, 4, 5, 6, [1, 2, 3, 4, 5, 6]) }).to.throw('Invalid input!');

        });
        it("valid inputs", () => {
            expect(lottery.checkTicket([11, 22, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
            expect(lottery.checkTicket([5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6])).to.equal(undefined);
            expect(lottery.checkTicket([0, 0, 0, 0, 0, 0], [1, 2, 3, 4, 5, 6])).to.equal(undefined);
        })

    })
    describe("secondChance", () => {
        it('invalid inputs', () => {

            expect(() => { lottery.secondChance('55', [55, 33, 66]) }).to.throw('Invalid input!');
            expect(() => { lottery.secondChance(55, 55) }).to.throw('Invalid input!');

        });
        it("valid inputs", () => {
            expect(lottery.secondChance(238, [345, 656, 238])).to.equal('You win our second chance prize!');
            expect(lottery.secondChance(222, [333, 555, 999])).to.equal("Sorry, your ticket didn't win!");
        })

    })
});


