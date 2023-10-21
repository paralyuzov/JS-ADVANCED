const onlineStore = require("./onlineStore");
const { assert, expect } = require("chai");

describe("onlineStore ", () => {
    describe('isProductAvailable', () => {
        it("test with invalid input", () => {
            expect(() => onlineStore.isProductAvailable(23, "test")).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable(["test"], 32)).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable(["test"], "")).to.throw("Invalid input.");
        });

        it("test with valid input", () => {
            expect(onlineStore.isProductAvailable("item", 0)).to.equal("Sorry, item is currently out of stock.");
            expect(onlineStore.isProductAvailable("item", -5)).to.equal("Sorry, item is currently out of stock.");
            expect(onlineStore.isProductAvailable("Fish", 3)).to.equal("Great! Fish is available for purchase.");
            expect(onlineStore.isProductAvailable("Eggs", 65)).to.equal("Great! Eggs is available for purchase.");
        });

    });

    describe('canAffordProduct', () => {
        it("test with invalid input", () => {
            expect(() => onlineStore.canAffordProduct(23, "test")).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct("test", 54)).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct("test", "something")).to.throw("Invalid input.");

        });

        it("test with valid input", () => {
            expect(onlineStore.canAffordProduct(53, 20)).to.equal("You don't have sufficient funds to buy this product.");
            expect(onlineStore.canAffordProduct(45, 60)).to.equal(`Product purchased. Your remaining balance is $15.`);
            expect(onlineStore.canAffordProduct(35, 35)).to.equal(`Product purchased. Your remaining balance is $0.`);
        });

    });

    describe('getRecommendedProducts', () => {
        it("test with invalid input", () => {
            expect(() => onlineStore.getRecommendedProducts("something", "test")).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts(["something"], 5)).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts(35, {})).to.throw("Invalid input.");

        });

        it("test with valid input", () => {
            let products = [
                { "name": "Camera", "category": "Photography" },
                { "name": "TV", "category": "Tech" },
                { "name": "PC", "category": "IT" },
                { "name": "CPU", "category": "Tech" },
                { "name": "The Big Bang Theory", "category": "Book" },

            ]

            expect(onlineStore.getRecommendedProducts(products, "Tech")).to.equal(`Recommended products in the Tech category: TV, CPU`);
            expect(onlineStore.getRecommendedProducts(products, "IT")).to.equal(`Recommended products in the IT category: PC`);
            expect(onlineStore.getRecommendedProducts(products, "Art")).to.equal(`Sorry, we currently have no recommended products in the Art category.`);
            expect(onlineStore.getRecommendedProducts(products, "Garden")).to.equal(`Sorry, we currently have no recommended products in the Garden category.`);
        });

    });

});