
const { assert, expect } = require("chai");
const { sum } = require('./sumOfNumbers')

describe("sum", () => {
    it("", () => {
        assert.equal(sum([]), 0);
    });
    it("", () => {
        assert.equal(sum([1, 2, 3]), 6);
    });
    it("", () => {
        let invalidArray = [1, 2, "pesho"]
        let result = sum(invalidArray);
        expect(result).to.be.NaN
    });
    it("", () => {
        let invalidArray = ["1", "2", "xaG"]
        let result = sum(invalidArray);
        expect(result).to.be.NaN
    });
    it("", () => {
        let invalidArray = [true, 1, 2]
        let result = sum(invalidArray);
        expect(result).to.be.equal(4)
    });


});