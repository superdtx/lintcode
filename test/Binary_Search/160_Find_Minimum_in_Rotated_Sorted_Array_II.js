import sut from "../../src/Binary_Search/160_Find_Minimum_in_Rotated_Sorted_Array_II";
import { expect } from 'chai';

describe("Find_Minimum_in_Rotated_Sorted_Array_II", ()=>{
	it("should return 0 given [4, 4, 4, 5, 6, 0, 1, 2, 2]", ()=>{
		const res = sut([4, 4, 4, 5, 6, 0, 1, 2, 2]);
		expect(res).to.equal(0);
	});

	it("should return 0 given [4, 4, 5, 6, 0, 1, 2, 2, 4]", ()=>{
		const res = sut([4, 4, 5, 6, 0, 1, 2, 2, 4]);
		expect(res).to.equal(0);
	});

	it("should return 0 given [0, 1, 2, 2, 4, 4, 4, 5, 6]", ()=>{
		const res = sut([0, 1, 2, 2, 4, 4, 4, 5, 6]);
		expect(res).to.equal(0);
	});

	xit("should return 0 given [2, 2, 1, 0, 6, 5, 4, 4, 4]", ()=>{
		const res = sut([2, 2, 1, 0, 6, 5, 4, 4, 4]);
		expect(res).to.equal(0);
	});

	xit("should return 0 given [4, 2, 2, 1, 0, 6, 5, 4, 4]", ()=>{
		const res = sut([4, 2, 2, 1, 0, 6, 5, 4, 4]);
		expect(res).to.equal(0);
	});

	xit("should return 0 given [6, 5, 4, 4, 4, 2, 2, 1, 0]", ()=>{
		const res = sut([6, 5, 4, 4, 4, 2, 2, 1, 0]);
		expect(res).to.equal(0);
	});
});