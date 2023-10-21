const carService = require("./carService");
const { assert, expect } = require("chai");

describe("carService ", () => {
    describe('isItExpensive', () => {
        it("test with valid input", () => {
            expect(carService.isItExpensive("Engine")).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive("Transmission")).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive("Change brake pads")).to.equal(`The overall price will be a bit cheaper`);
        });

    });

    describe('discount', () => {
        it("test with invalid input", () => {
            expect(() => carService.discount("Engine", 5)).to.throw(`Invalid input`);
            expect(() => carService.discount(25, "oil")).to.throw(`Invalid input`);
            expect(() => carService.discount("coolant", "oil")).to.throw(`Invalid input`);
        });

        it("test with valid input", () => {
            expect(carService.discount(3, 120)).to.equal(`Discount applied! You saved 18$`);
            expect(carService.discount(7, 520)).to.equal(`Discount applied! You saved 78$`);
            expect(carService.discount(12, 685)).to.equal(`Discount applied! You saved 205.5$`);
            expect(carService.discount(2, 777)).to.equal(`You cannot apply a discount`);
            expect(carService.discount(0, 777)).to.equal(`You cannot apply a discount`);
        });

    });

    describe('partsToBuy', () => {
        it("test with invalid input", () => {
            expect(() => carService.partsToBuy({}, "test")).to.throw(`Invalid input`);
            expect(() => carService.partsToBuy(35, ["test"])).to.throw(`Invalid input`);
            expect(() => carService.partsToBuy([2, 5, 2], { "name": "TEST" })).to.throw(`Invalid input`);

        });

        it("test with valid input", () => {
            let partsCatalog = [
                { "part": "blowoff valve", "price": 145 },
                { "part": "brake pads", "price": 80 },
                { "part": "oil", "price": 120 }
            ]

            let neededPart = ["blowoff valve", "oil"];

            expect(carService.partsToBuy(partsCatalog, neededPart)).to.equal(265);
            expect(carService.partsToBuy([], neededPart)).to.equal(0);
            expect(carService.partsToBuy(partsCatalog, ["blowoff valve", "oil", "brake pads"])).to.equal(345);
            expect(carService.partsToBuy(partsCatalog, [])).to.equal(0);
        });

    });

});

