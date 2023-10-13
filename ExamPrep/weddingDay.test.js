const weddingDay = require("./weddingDay");
const { assert, expect } = require("chai");

describe("Wedding Day", () => {
    describe('PickVenue ', () => {
        it('test with invalid input', () => {
            expect(() => { weddingDay.pickVenue(5, 6, "") }).to.throw("Invalid Information!");
            expect(() => { weddingDay.pickVenue(5, "", []) }).to.throw("Invalid Information!");
            expect(() => { weddingDay.pickVenue("", "5", "") }).to.throw("Invalid Information!");
            expect(() => { weddingDay.pickVenue(1, 6, "Burgas") }).to.throw("The location of this venue is not in the correct area!");


        });

        it("with valid input", () => {
            expect(weddingDay.pickVenue(150, 120, "Varna")).to.equal("This venue meets the requirements, with capacity of 150 guests and 120$ cover.");
            expect(weddingDay.pickVenue(180, 100, "Varna")).to.equal("This venue meets the requirements, with capacity of 180 guests and 100$ cover.");
            expect(weddingDay.pickVenue(100, 100, "Varna")).to.equal("This venue does not meet your requirements!");
            expect(weddingDay.pickVenue(151, 130, "Varna")).to.equal("This venue does not meet your requirements!");
            expect(weddingDay.pickVenue(200, 156, "Varna")).to.equal("This venue does not meet your requirements!");
        })

    });

    describe('otherSpendings  ', () => {
        it('test with invalid input', () => {
            expect(() => { weddingDay.otherSpendings(5, 6, "") }).to.throw("Invalid Information!");
            expect(() => { weddingDay.otherSpendings(5, "", true) }).to.throw("Invalid Information!");
            expect(() => { weddingDay.otherSpendings([], "", true) }).to.throw("Invalid Information!");
            expect(() => { weddingDay.otherSpendings([], [], "false") }).to.throw("Invalid Information!");
            expect(() => { weddingDay.otherSpendings([], {}, false) }).to.throw("Invalid Information!");



        });

        it("with valid input", () => {
            expect(weddingDay.otherSpendings(["flowers"], ["pictures"], true)).to.equal("You spend 1020$ for wedding decoration and photography with 15% discount!");
            expect(weddingDay.otherSpendings(["Fabric drapes and curtains"], ["pictures"], true)).to.equal("You spend 935$ for wedding decoration and photography with 15% discount!");
            expect(weddingDay.otherSpendings(["Fabric drapes and curtains"], ["video"], true)).to.equal("You spend 1445$ for wedding decoration and photography with 15% discount!");
            expect(weddingDay.otherSpendings(["flowers"], ["video"], true)).to.equal("You spend 1530$ for wedding decoration and photography with 15% discount!");

            expect(weddingDay.otherSpendings(["flowers"], ["pictures"], false)).to.equal("You spend 1200$ for wedding decoration and photography!");
            expect(weddingDay.otherSpendings(["Fabric drapes and curtains"], ["pictures"], false)).to.equal("You spend 1100$ for wedding decoration and photography!");
            expect(weddingDay.otherSpendings(["Fabric drapes and curtains"], ["video"], false)).to.equal("You spend 1700$ for wedding decoration and photography!");
            expect(weddingDay.otherSpendings(["flowers"], ["video"], false)).to.equal("You spend 1800$ for wedding decoration and photography!");

        })

    });

    describe('tableDistribution', () => {
        it('test with invalid input', () => {
            expect(() => { weddingDay.tableDistribution("", "") }).to.throw("Invalid Information!");
            expect(() => { weddingDay.tableDistribution("", [2, 5]) }).to.throw("Invalid Information!");
            expect(() => { weddingDay.tableDistribution(62, "") }).to.throw("Invalid Information!");
            expect(() => { weddingDay.tableDistribution(0, 1) }).to.throw("Invalid Information!");
            expect(() => { weddingDay.tableDistribution(-10, 5) }).to.throw("Invalid Information!");
            expect(() => { weddingDay.tableDistribution(-10, -255) }).to.throw("Invalid Information!");
            expect(() => { weddingDay.tableDistribution(10, 0) }).to.throw("Invalid Information!");
            expect(() => { weddingDay.tableDistribution(10, -24) }).to.throw("Invalid Information!");

        });

        it('test with valid input', () => {
            expect(weddingDay.tableDistribution(5, 1)).to.equal("There is only 5 people on every table, you can join some tables.");
            expect(weddingDay.tableDistribution(10, 2)).to.equal("There is only 5 people on every table, you can join some tables.");
            expect(weddingDay.tableDistribution(16, 3)).to.equal("There is only 5 people on every table, you can join some tables.");

            expect(weddingDay.tableDistribution(19, 3)).to.equal("You have 3 tables with 6 guests on table.");
            expect(weddingDay.tableDistribution(32, 4)).to.equal("You have 4 tables with 8 guests on table.");
            expect(weddingDay.tableDistribution(120, 10)).to.equal("You have 10 tables with 12 guests on table.");

        });

    })
});