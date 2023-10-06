const { assert, expect } = require("chai");
const { isOddOrEven } = require("./evenOrOdd");

describe("check even or odd", () => {
    it("check input data is empty array", () => {
        assert.equal(isOddOrEven([]), undefined);

    })

    it("check input data is object", () => {
        assert.equal(isOddOrEven({ "S": "xx" }), undefined);

    })

    it("check input data is number", () => {
        assert.equal(isOddOrEven(2), undefined);

    })

    it("check input data is even", () => {
        assert.equal(isOddOrEven("miro"), "even");

    })
    it("check input data is odd", () => {
        assert.equal(isOddOrEven("miros"), "odd");

    })

    it("check input data is even", () => {
        assert.equal(isOddOrEven("barb"), "even");

    })
    it("check input data is odd", () => {
        assert.equal(isOddOrEven("paralyuzovf"), "odd");

    })
})