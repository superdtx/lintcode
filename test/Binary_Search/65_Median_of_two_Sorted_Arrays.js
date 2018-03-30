import sut from "../../src/Binary_Search/65_Median_of_two_Sorted_Arrays";
import { expect } from 'chai';

describe("Median_of_two_Sorted_Arrays", ()=>{
	it("should return 3.5 given [1,2,3,4,5,6] and [2,3,4,5]", ()=>{
		expect(sut([1,2,3,4,5,6], [2,3,4,5])).to.equal(3.5); 
	});

	it("should return 3 given [1,2,3] and [4,5]", ()=>{
		expect(sut([1,2,3], [4,5])).to.equal(3); 
	});
});