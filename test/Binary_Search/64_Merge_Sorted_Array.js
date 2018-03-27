
import sut from "../../src/Binary_Search/64_Merge_Sorted_Array";
import { expect } from 'chai';

describe("Merge_Sorted_Array", ()=>{
	it("should return [1, 2, 3] given [1, 2, 3] and []", ()=>{
		expect(sut([1, 2, 3], 3, [], 0)).to.deep.equal([1, 2, 3]);
	});

	it("should return [1, 2, 3, 4, 5] given [1, 2, 3] and [4,5]", ()=>{
		expect(sut([1, 2, 3], 3, [4, 5], 2)).to.deep.equal([1, 2, 3, 4, 5]);
	});

	it("should return [1, 2, 3, 4, 5] given [1, 2, 3] and [4,5]", ()=>{
		expect(sut([1, 2, 3], 3, [4, 5], 2)).to.deep.equal([1, 2, 3, 4, 5]);
	});

	it("should return [1, 2, 3, 4, 5] given [1, 3] and [2, 4, 5]", ()=>{
		expect(sut([1, 3], 2, [2, 4, 5], 3)).to.deep.equal([1, 2, 3, 4, 5]);
	});
});