import sut from "../../src/Binary_Search/100_Remove_Duplicates_from_Sorted_Array";
import { expect } from 'chai';

describe("Remove_Duplicates_from_Sorted_Array", ()=>{
	it("should return 0 given []", ()=>{
		expect(sut([])).to.equals(0);
	});

	it("should return 3 given [1, 2, 3]", ()=>{
		expect(sut([1, 2, 3])).to.equals(3);
	});

	it("should return 2 given [1, 1, 2]", ()=>{
		expect(sut([1, 1, 2])).to.equals(2);
	});
});


