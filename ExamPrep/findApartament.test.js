const findNewApartment = require("./findApartment");
const { assert, expect } = require("chai");

describe("findNewApartment ", () => {
    describe('isGoodLocation', () => {
        it("test with invalid input", () => {
            expect(() => findNewApartment.isGoodLocation(5, "string")).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation([], 2)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation([], {})).to.throw("Invalid input!");

        });

        it("different city", () => {
            expect(findNewApartment.isGoodLocation("Vraca", true)).to.equal("This location is not suitable for you.");
            expect(findNewApartment.isGoodLocation("Burgas", true)).to.equal("This location is not suitable for you.");
            expect(findNewApartment.isGoodLocation("Ruse", false)).to.equal("This location is not suitable for you.");
        });

        it("if value is false", () => {
            expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation("Varna", false)).to.equal("There is no public transport in area.");
        });

        it("if value is true", () => {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation("Varna", true)).to.equal("You can go on home tour!");
        });
    });

    describe('isLargeEnough ', () => {
        it("test with invalid input", () => {
            expect(() => findNewApartment.isLargeEnough("test", "string")).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], 5)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], undefined)).to.throw("Invalid input!");
        });

        it("test with valid input", () => {
            expect(findNewApartment.isLargeEnough([20, 40, 60, 80], 40)).to.equal("40, 60, 80");
            expect(findNewApartment.isLargeEnough([20, 40, 60, 80], 90)).to.equal("");
            expect(findNewApartment.isLargeEnough([20, 40, 44, 55], 18)).to.equal("20, 40, 44, 55");
        });


    });

    describe('isItAffordable  ', () => {
        it("test with invalid input", () => {
            expect(() => findNewApartment.isItAffordable("test", "string")).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable([], 5)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(0, 0)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(-2, 5)).to.throw("Invalid input!");
        });

        it("test with valid input", () => {
            expect(findNewApartment.isItAffordable(200, 190)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(200, 200)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(200, 250)).to.equal("You can afford this home!");

        });
    });
});