const { assert, expect } = require("chai");
const { isSymmetric } = require("./checkForSymmetry");

describe("check for symmetry", () => {
    it('should return false if input is not an array', () => {
        //Arrange
        let input = "not array";
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.false
    })
    it('should return false if input is not an array', () => {
        //Arrange
        let input = {};
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.false
    })
    it('should return false if input is not an array', () => {
        //Arrange
        let input = [12, "pex"];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.false
    })

    it("should return true if input is symmetric array", () => {
        let input = [1, 2, 3, 4, 3, 2, 1]
        let result = isSymmetric(input);
        expect(result).to.be.true;
    })
    it("should return true if input is symmetric array", () => {
        let input = ["a", "b", "b", "a"]
        let result = isSymmetric(input);
        expect(result).to.be.true;
    })

    it("shoud return false if input array is not symmetric", () => {
        let input = [1, 2, 3, 4, 3, 2,]
        let result = isSymmetric(input);
        expect(result).to.be.false;
    })


})