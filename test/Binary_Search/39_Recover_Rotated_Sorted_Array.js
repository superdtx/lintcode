import sut from "../../src/Binary_Search/39_Recover_Rotated_Sorted_Array";
import { expect } from 'chai';

describe("Recover_Rotated_Sorted_Array", ()=>{
	it("should return [] given []", ()=>{
		expect(sut([])).to.eql([]); 
	});

	it("should return [1, 2, 3, 4, 5] given [4, 5, 1, 2, 3]", ()=>{
		expect(sut([4, 5, 1, 2, 3])).to.eql([1, 2, 3, 4, 5]); 
	});

	it("should return [1, 2, 3, 4, 5] given [1, 2, 3, 4, 5]", ()=>{
		expect(sut([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5]); 
	});
});