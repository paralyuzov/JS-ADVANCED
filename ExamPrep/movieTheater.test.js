const movieTheater = require("./movieTheater.js");
const { assert, expect } = require("chai");

describe("movieTheater ", () => {
    describe('ageRestrictions ', () => {
        it("test with valid input", () => {
            expect(movieTheater.ageRestrictions("G")).to.equal(`All ages admitted to watch the movie`);
            expect(movieTheater.ageRestrictions("PG")).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
            expect(movieTheater.ageRestrictions("R")).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
            expect(movieTheater.ageRestrictions("NC-17")).to.equal(`No one under 17 admitted to watch the movie`);
            expect(movieTheater.ageRestrictions("NC-21")).to.equal(`There are no age restrictions for this movie`);

        });
    });

    describe('moneySpent ', () => {
        it("test with invalid input", () => {
            expect(() => movieTheater.moneySpent("G", [], [])).to.throw(`Invalid input`);
            expect(() => movieTheater.moneySpent(5, ["test"], "test")).to.throw(`Invalid input`);
            expect(() => movieTheater.moneySpent(5, 35, ["test"])).to.throw(`Invalid input`);

        });

        it("test with valid input", () => {
            expect(movieTheater.moneySpent(20, ["Nachos"], ["Soda"])).to.equal(`The total cost for the purchase with applied discount is 246.80`);
            expect(movieTheater.moneySpent(15, ["Nachos"], ["Water"])).to.equal(`The total cost for the purchase with applied discount is 186.00`);
            expect(movieTheater.moneySpent(10, ["Popcorn"], ["Water"])).to.equal(`The total cost for the purchase with applied discount is 124.80`);
            expect(movieTheater.moneySpent(10, ["Popcorn"], ["Soda"])).to.equal(`The total cost for the purchase with applied discount is 125.60`);

            expect(movieTheater.moneySpent(2, ["Nachos"], ["Soda"])).to.equal(`The total cost for the purchase is 38.50`);
            expect(movieTheater.moneySpent(1, ["Nachos"], ["Water"])).to.equal(`The total cost for the purchase is 22.50`);
            expect(movieTheater.moneySpent(1, ["Popcorn"], ["Water"])).to.equal(`The total cost for the purchase is 21.00`);
            expect(movieTheater.moneySpent(2, ["Popcorn"], ["Soda"])).to.equal(`The total cost for the purchase is 37.00`);

            expect(movieTheater.moneySpent(0, ["Popcorn"], ["Soda"])).to.equal(`The total cost for the purchase is 7.00`);
            expect(movieTheater.moneySpent(0, ["Popcorn"], ["Water"])).to.equal(`The total cost for the purchase is 6.00`);
            expect(movieTheater.moneySpent(0, ["Nachos"], ["Water"])).to.equal(`The total cost for the purchase is 7.50`);
            expect(movieTheater.moneySpent(0, ["Nachos"], ["Soda"])).to.equal(`The total cost for the purchase is 8.50`);

        });
    });

    describe('reservation ', () => {
        it("test with invalid input", () => {
            expect(() => movieTheater.reservation([], "test")).to.throw(`Invalid input`);
            expect(() => movieTheater.reservation("test", 0)).to.throw(`Invalid input`);
            expect(() => movieTheater.reservation("test", "something")).to.throw(`Invalid input`);
            expect(() => movieTheater.reservation(5, 66)).to.throw(`Invalid input`);


        });

        it("test with valid input", () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 5 }, { rowNumber: 2, freeSeats: 7 }], 5)).to.equal(2);
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 5 }, { rowNumber: 2, freeSeats: 10 }], 3)).to.equal(2);
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 12 }, { rowNumber: 2, freeSeats: 8 }], 10)).to.equal(1);
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 12 }, { rowNumber: 2, freeSeats: 8 }], 0)).to.equal(2);

        });
    });

});