const rentCar = require("./rentCar");
const { assert, expect } = require("chai");

describe("rentCar", () => {
    describe('searchCar', () => {
        it('test with invalid input', () => {
            expect(() => rentCar.searchCar("test", "something")).to.throw("Invalid input!");
            expect(() => rentCar.searchCar(["test"], 5)).to.throw("Invalid input!");
            expect(() => rentCar.searchCar(["test"], null)).to.throw("Invalid input!");
        });

        it('test with valid input', () => {
            let cars = ["BMW", "MERZ", "HONDA", "CRYSLER", "MERZ"]
            expect(rentCar.searchCar(cars, "HONDA")).to.equal(`There is 1 car of model HONDA in the catalog!`);
            expect(rentCar.searchCar(cars, "MERZ")).to.equal(`There is 2 car of model MERZ in the catalog!`);
            expect(() => rentCar.searchCar(cars, "VW")).to.throw(`There are no such models in the catalog!`);
        });
    });

    describe('calculatePriceOfCar', () => {
        it('test with invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar("test", "something")).to.throw("Invalid input!");
            expect(() => rentCar.calculatePriceOfCar(["test"], 3)).to.throw("Invalid input!");
            expect(() => rentCar.calculatePriceOfCar("test", {})).to.throw("Invalid input!");
        });

        it('test with valid input', () => {
            expect(rentCar.calculatePriceOfCar("BMW", 5)).to.equal(`You choose BMW and it will cost $225!`);
            expect(rentCar.calculatePriceOfCar("Toyota", 8)).to.equal(`You choose Toyota and it will cost $320!`);
            expect(rentCar.calculatePriceOfCar("Mercedes", 3)).to.equal(`You choose Mercedes and it will cost $150!`);
            expect(() => rentCar.calculatePriceOfCar("Chrysler", 3)).to.throw(`No such model in the catalog!`);
            expect(() => rentCar.calculatePriceOfCar("Buggati", 6)).to.throw(`No such model in the catalog!`);
        });
    });

    describe('checkBudget', () => {
        it('test with invalid input', () => {
            expect(() => rentCar.checkBudget("test", "something", 5)).to.throw("Invalid input!");
            expect(() => rentCar.checkBudget("test", 5, 5)).to.throw("Invalid input!");
            expect(() => rentCar.checkBudget(25, [], "")).to.throw("Invalid input!");
            expect(() => rentCar.checkBudget("test", [], "something")).to.throw("Invalid input!");

        });

        it('test with valid input', () => {
            expect(rentCar.checkBudget(250, 3, 700)).to.equal("You need a bigger budget!");
            expect(rentCar.checkBudget(230, 7, 1500)).to.equal("You need a bigger budget!");
            expect(rentCar.checkBudget(230, 7, 0)).to.equal("You need a bigger budget!");
            expect(rentCar.checkBudget(200, 2, 700)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(200, 0, 690)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(200, 3, 690)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(200, 5, 1000)).to.equal(`You rent a car!`);
        });
    });
})