import sut from "../../src/Binary_Search/60_Search_Insert_Position";
import { expect } from "chai";

describe("Search_Insert_Position", ()=>{
	it("should return 0 given [] and target value 5", ()=>{
		expect(sut([], 5)).to.equal(0);
	});

	it("should return 2 given [1, 3, 5, 6] and target value 5", ()=>{
		expect(sut([1, 3, 5, 6], 5)).to.equal(2);
	});

	it("should return 1 given [1, 3, 5, 6] and target value 2", ()=>{
		expect(sut([1, 3, 5, 6], 2)).to.equal(1);
	});

	it("should return 4 given [1, 3, 5, 6] and target value 7", ()=>{
		expect(sut([1, 3, 5, 6], 7)).to.equal(4);
	});

	it("should return 0 given [1, 3, 5, 6] and target value 0", ()=>{
		expect(sut([1, 3, 5, 6], 0)).to.equal(0);
	});

	it("should return 1 given [1, 3, 3, 5, 6] and target value 3", ()=>{
		expect(sut([1, 3, 5, 6], 3)).to.equal(1);
	});
});