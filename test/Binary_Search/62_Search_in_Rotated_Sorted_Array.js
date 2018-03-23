import sut from "../../src/Binary_Search/62_Search_in_Rotated_Sorted_Array";
import { expect } from 'chai';

describe("Search_in_Rotated_Sorted_Array", ()=>{
	it("should return -1 given [4, 5, 1, 2, 3] and target value 0", ()=>{
		const res = sut([4, 5, 1, 2, 3], 0);
		expect(res).to.equal(-1);
	});

	it("should return 4 given [4, 5, 6, 1, 2, 3] and target value 2", ()=>{
		const res = sut([4, 5, 6, 1, 2, 3], 2);
		expect(res).to.equal(4);
	});

	it("should return 1 given [4, 5, 6, 1, 2, 3] and target value 5", ()=>{
		const res = sut([4, 5, 6, 1, 2, 3], 5);
		expect(res).to.equal(1);
	});

	xit("should return 4 given [3, 2, 1, 6, 5, 4] and target value 5", ()=>{
		const res = sut([3, 2, 1, 6, 5, 4], 5);
		expect(res).to.equal(4);
	});

	xit("should return 1 given [3, 2, 1, 6, 5, 4] and target value 2", ()=>{
		const res = sut([3, 2, 1, 6, 5, 4], 2);
		expect(res).to.equal(1);
	});

	it("should return 0 given [1, 2, 3, 4, 5] and target value 1", ()=>{
		const res = sut([1, 2, 3, 4, 5], 1);
		expect(res).to.equal(0);
	})

	it("should return 4 given [1, 2, 3, 4, 5] and target value 5", ()=>{
		const res = sut([1, 2, 3, 4, 5], 5);
		expect(res).to.equal(4);
	})

	xit("should return 0 given [5, 4, 3, 2, 1] and target value 5", ()=>{
		const res = sut([5, 4, 3, 2, 1], 5);
		expect(res).to.equal(0);
	})

	xit("should return 4 given [5, 4, 3, 2, 1] and target value 1", ()=>{
		const res = sut([5, 4, 3, 2, 1], 1);
		expect(res).to.equal(4);
	})
});