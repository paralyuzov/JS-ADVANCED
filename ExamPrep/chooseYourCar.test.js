const chooseYourCar = require("./chooseYourCar");
const { assert, expect } = require("chai");

describe("chooseYourCar ", () => {
    describe('choosingType', () => {
        it("test with invalid input", () => {
            expect(() => chooseYourCar.choosingType("sedan", "black", 1899)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType("sedan", "black", 2023)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType("touring", "black", 2000)).to.throw("This type of car is not what you are looking for.");
        });

        it("test with valid input", () => {
            expect(chooseYourCar.choosingType("Sedan", "black", 2010)).to.equal("This black Sedan meets the requirements, that you have.");
            expect(chooseYourCar.choosingType("Sedan", "red", 2022)).to.equal("This red Sedan meets the requirements, that you have.");
            expect(chooseYourCar.choosingType("Sedan", "white", 2009)).to.equal("This Sedan is too old for you, especially with that white color.");
            expect(chooseYourCar.choosingType("Sedan", "white", 1900)).to.equal("This Sedan is too old for you, especially with that white color.");
        });

    });

    describe('brandName', () => {
        it("test with invalid input", () => {
            expect(() => chooseYourCar.brandName("sedan", 2)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(["BMW", "AUDI"], 3)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(["BMW", "AUDI"], -2)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(["BMW", "AUDI"], "index")).to.throw("Invalid Information!");
        });

        it("test with valid input", () => {
            expect(chooseYourCar.brandName(["BMW", "AUDI", "HONDA"], 0)).to.equal("AUDI, HONDA");
            expect(chooseYourCar.brandName(["BMW", "AUDI", "HONDA", "MERZ"], 3)).to.equal("BMW, AUDI, HONDA");
            expect(chooseYourCar.brandName(["BMW", "AUDI", "HONDA", "MERZ"], 2)).to.equal("BMW, AUDI, MERZ");
        });

    });

    describe('carFuelConsumption', () => {
        it("test with invalid input", () => {
            expect(() => chooseYourCar.carFuelConsumption("sedan", 2)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(25, "test")).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(["a", "b"], 0)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(-1, 0)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(-1, -35)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(0, 0)).to.throw("Invalid Information!");

        });

        it("test with valid input", () => {
            expect(chooseYourCar.carFuelConsumption(100, 6)).to.equal("The car is efficient enough, it burns 6.00 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(250, 18)).to.equal("The car burns too much fuel - 7.20 liters!");
            expect(chooseYourCar.carFuelConsumption(467, 42)).to.equal("The car burns too much fuel - 8.99 liters!");

        });

    });

});