import sut from "../../src/Binary_Search/159_Find_Minimum_in_Rotated_Sorted_Array";
import { expect } from 'chai';

describe("Find_Minimum_in_Rotated_Sorted_Array", ()=>{
	it("should return 0 given [4, 5, 6, 7, 0, 1, 2]", ()=>{
		const res = sut([4, 5, 6, 7, 0, 1, 2]);
		expect(res).to.equal(0);
	});

	it("should return 0 given [0, 1, 2, 3, 4, 5, 6, 7]", ()=>{
		const res = sut([0, 1, 2, 3, 4, 5, 6, 7]);
		expect(res).to.equal(0);
	});

	xit("should return 0 given [2, 1, 0, 7, 6, 5, 4, 3]", ()=>{
		const res = sut([2, 1, 0, 7, 6, 5, 4, 3]);
		expect(res).to.equal(0);
	});

	xit("should return 0 given [7, 6, 5, 4, 3, 2, 1, 0]", ()=>{
		const res = sut([7, 6, 5, 4, 3, 2, 1, 0]);
		expect(res).to.equal(0);
	});
});