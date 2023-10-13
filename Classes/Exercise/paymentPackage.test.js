const { PaymentPackage } = require("./paymentPackage");
const { assert, expect } = require("chai");

describe("create instance", () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage("test", 10);
    })
    it("correct name", () => {
        assert.equal(paymentPackage._name, "test")
    })
})