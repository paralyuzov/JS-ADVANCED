const motorcycleRider = require("./motorcycleRider");
const { assert, expect } = require("chai");

describe("motorcycleRider ", () => {
    describe('licenseRestriction', () => {
        it("test with invalid input", () => {
            expect(() => motorcycleRider.licenseRestriction(5)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction(["test"])).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction("someString")).to.throw("Invalid Information!");
        });

        it("test with valid input", () => {
            expect(motorcycleRider.licenseRestriction("AM")).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
            expect(motorcycleRider.licenseRestriction("A1")).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
            expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
            expect(motorcycleRider.licenseRestriction("A")).to.equal("No motorcycle restrictions, and the minimum age is 24.");

        });

    });

    describe('motorcycleShowroom ', () => {
        it("test with invalid input", () => {
            expect(() => motorcycleRider.motorcycleShowroom("test", [])).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(5, 9)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom("test", "something")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([], 49)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([], 51)).to.throw("Invalid Information!");

        });

        it("test with valid input", () => {
            expect(motorcycleRider.motorcycleShowroom(["60", "70", "100", "250"], 240)).to.equal("There are 3 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom(["60", "70", "100", "250"], 50)).to.equal("There are 0 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom(["60", "70", "100", "250", "300"], 290)).to.equal("There are 4 available motorcycles matching your criteria!");

        });

    });

    describe('otherSpendings ', () => {
        it("test with invalid input", () => {
            expect(() => motorcycleRider.otherSpendings(["test"], ["test"], 5)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["test"], "test", false)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(123, [5, 3], true)).to.throw("Invalid Information!");

        });

        it("test with valid input", () => {
            expect(motorcycleRider.otherSpendings(["helmet"], ["engine oil"], true)).to.equal("You spend $243.00 for equipment and consumables with 10% discount!");
            expect(motorcycleRider.otherSpendings(["helmet"], ["oil filter"], true)).to.equal("You spend $207.00 for equipment and consumables with 10% discount!");
            expect(motorcycleRider.otherSpendings(["jacked"], ["engine oil"], true)).to.equal("You spend $333.00 for equipment and consumables with 10% discount!");
            expect(motorcycleRider.otherSpendings(["jacked"], ["oil filter"], true)).to.equal("You spend $297.00 for equipment and consumables with 10% discount!");

            expect(motorcycleRider.otherSpendings(["jacked"], ["oil filter"], false)).to.equal("You spend $330.00 for equipment and consumables!");
            expect(motorcycleRider.otherSpendings(["jacked"], ["engine oil"], false)).to.equal("You spend $370.00 for equipment and consumables!");
            expect(motorcycleRider.otherSpendings(["helmet"], ["engine oil"], false)).to.equal("You spend $270.00 for equipment and consumables!");
            expect(motorcycleRider.otherSpendings(["helmet"], ["oil filter"], false)).to.equal("You spend $230.00 for equipment and consumables!");


        });

    });

});