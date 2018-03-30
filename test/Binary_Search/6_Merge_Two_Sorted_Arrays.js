import sut from "../../src/Binary_Search/6_Merge_Two_Sorted_Arrays";
import { expect } from 'chai';

describe("Merge_Two_Sorted_Arrays", ()=>{
	it("should return [1,2,2,3,4,4,5,6] given [1,2,3,4] and [2,4,5,6]", ()=>{
		expect(sut([1,2,3,4], [2,4,5,6])).to.eql([1,2,2,3,4,4,5,6]); 
	});

	it("should return [1,2,2,3,4,4,5,6] given [1,2,3,4,5,6] and [2,4]", ()=>{
		expect(sut([1,2,3,4,5,6], [2,4])).to.eql([1,2,2,3,4,4,5,6]); 
	});
});