const { assert, expect } = require("chai");
const mathEnforcer = require("./mathEnforcer");

describe("Math Enforcer", () => {
    it("addFive with string", () => {
        assert.equal(mathEnforcer.addFive("strubg")), undefined
    })
    it("addFive with []", () => {
        assert.equal(mathEnforcer.addFive([])), undefined
    })
    it("addFive with {}", () => {
        assert.equal(mathEnforcer.addFive({})), undefined
    })
    it("addFive with positive input", () => {
        assert.equal(mathEnforcer.addFive(5), 10);
        assert.equal(mathEnforcer.addFive(15), 20);
        assert.equal(mathEnforcer.addFive(29), 34)
    })
    it("addFive with negative input", () => {
        assert.equal(mathEnforcer.addFive(-10), -5)
        assert.equal(mathEnforcer.addFive(-20), -15)
        assert.equal(mathEnforcer.addFive(-105), -100)
    })
    it("addFive with negative floating input", () => {
        assert.equal(mathEnforcer.addFive(-0.1), 4.9);
        assert.equal(mathEnforcer.addFive(-0.05), 4.95);
        assert.equal(mathEnforcer.addFive(-0.001), 4.999);
        assert.equal(mathEnforcer.addFive(0.001), 5.001);
        assert.equal(mathEnforcer.addFive(0.05), 5.05);
        assert.equal(mathEnforcer.addFive(0.5), 5.5);
    })

    describe("substract Ten", () => {
        it("substract with string", () => {
            assert.equal(mathEnforcer.subtractTen("strubg")), undefined
        })
        it("substract with []", () => {
            assert.equal(mathEnforcer.subtractTen([])), undefined
        })
        it("substract with {}", () => {
            assert.equal(mathEnforcer.subtractTen({})), undefined
        })
        it("substract with positive input", () => {
            assert.equal(mathEnforcer.subtractTen(20), 10);
            assert.equal(mathEnforcer.subtractTen(30), 20);
            assert.equal(mathEnforcer.subtractTen(44), 34)
        })
        it("substract with negative input", () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15)
            assert.equal(mathEnforcer.subtractTen(-15), -25)
            assert.equal(mathEnforcer.subtractTen(-105), -115)
        })
        it("substract with negative floating input", () => {
            assert.equal(mathEnforcer.subtractTen(-0.1), -10.1);
            assert.equal(mathEnforcer.subtractTen(-0.05), -10.05);
            assert.equal(mathEnforcer.subtractTen(-0.001), -10.001);
            assert.equal(mathEnforcer.subtractTen(0.001), -9.999);
            assert.equal(mathEnforcer.subtractTen(0.05), -9.95);
            assert.equal(mathEnforcer.subtractTen(0.5), -9.5);
        })

    })

    describe("Sum", () => {
        it("function sum with invalid inputs", () => {
            assert.equal(mathEnforcer.sum("string", 5), undefined)
            assert.equal(mathEnforcer.sum(5, "string"), undefined)
            assert.equal(mathEnforcer.sum([], []), undefined)
            assert.equal(mathEnforcer.sum({ "name": "test" }, [1, 2.4]), undefined)

        })
        it("function sum with valid inputs", () => {
            assert.equal(mathEnforcer.sum(5, 5), 10)
            assert.equal(mathEnforcer.sum(50.1, 50.1), 100.2)
            assert.equal(mathEnforcer.sum(50.01, 50.01), 100.02)

            assert.equal(mathEnforcer.sum(-5, 5), 0)
            assert.equal(mathEnforcer.sum(-5.05, -5.05), -10.10)
            assert.equal(mathEnforcer.sum(35, -5), 30)
            assert.equal(mathEnforcer.sum(-5.05, -5), -10.05)


        })

    })



})