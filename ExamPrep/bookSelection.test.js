const bookSelection = require("./bookSelection");
const { assert, expect } = require("chai");

describe("bookSelection ", () => {
    describe('isGenreSuitable', () => {
        it("test with valid input", () => {
            expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable("Horror", 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable("Horror", 15)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable("Thriller", 33)).to.equal(`Those books are suitable`);
        });

    });

    describe('isItAffordable', () => {
        it("test with invalid input", () => {
            expect(() => bookSelection.isItAffordable("Thriller", 12)).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable(33, ["test"])).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable("something", ["test"])).to.throw("Invalid input");
        });

        it("test with valid input", () => {
            expect(bookSelection.isItAffordable(35, 30)).to.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(35, 35)).to.equal("Book bought. You have 0$ left");
            expect(bookSelection.isItAffordable(24, 50)).to.equal("Book bought. You have 26$ left");
        });

    });

    describe('suitableTitles', () => {
        it("test with invalid input", () => {
            expect(() => bookSelection.suitableTitles("Thriller", 12)).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles({ "Thriller": "something" }, "test")).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles(["TEST"], 5)).to.throw("Invalid input");

        });

        it("test with valid input", () => {
            let books = [
                { "title": "Kapitan Petko", "genre": "biograpgy" },
                { "title": "BingBang", "genre": "physics" },
                { "title": "13,6eV", "genre": "quantum mechanics" },
                { "title": "Gravity", "genre": "physics" },
            ]

            expect(bookSelection.suitableTitles(books, "physics")).to.deep.equal(['BingBang', 'Gravity']);
            expect(bookSelection.suitableTitles(books, "quantum mechanics")).to.deep.equal(['13,6eV']);
            expect(bookSelection.suitableTitles(books, "biograpgy")).to.deep.equal(["Kapitan Petko"]);
        });

    });


});
