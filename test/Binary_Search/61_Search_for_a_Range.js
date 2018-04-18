import sut from "../../src/Binary_Search/61_Search_for_a_Range";
import { expect } from 'chai';

describe("Search_for_a_Range", () => {
	it("should return [-1, -1] given [] and target value 1", ()=>{
		const res = sut([], 1);
		expect(res[0]).to.equal(-1);
		expect(res[1]).to.equal(-1);
	});

	it("should return [0, 0] given [1] and target value 1", ()=>{
		const res = sut([1], 1);
		expect(res[0]).to.equal(0);
		expect(res[1]).to.equal(0);
	});

	it("should return [3, 4] given [5, 7, 7, 8, 8, 10] and target value 8", ()=>{
		const res = sut([5, 7, 7, 8, 8, 10], 8);
		expect(res[0]).to.equal(3);
		expect(res[1]).to.equal(4);
	});

	it("should return [0, 9] given [5,5,5,5,5,5,5,5,5,5] and target value 5", ()=>{
		const res = sut([5,5,5,5,5,5,5,5,5,5], 5);
		expect(res[0]).to.equal(0);
		expect(res[1]).to.equal(9);
	});

	it("should return [-1, -1] given [1,10,1001,201,1001,10001,10007] and target value 10008", ()=>{
		const res = sut([1,10,1001,201,1001,10001,10007], 10008);
		expect(res[0]).to.equal(-1);
		expect(res[1]).to.equal(-1);
	});

	it("should return [5, 5] given [5, 7, 7, 8, 8, 9, 10] and target value 9", ()=>{
		const res = sut([5, 7, 7, 8, 8, 9, 10], 9);
		expect(res[0]).to.equal(5);
		expect(res[1]).to.equal(5);
	});

	it("should return [0, 9] given [5, 5, 5, 5, 5, 5, 5, 5, 5, 5] and target value 5", ()=>{
		const res = sut([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5);
		expect(res[0]).to.equal(0);
		expect(res[1]).to.equal(9);
	});
	
	it("should return [-1, -1] given [5, 7, 7, 8, 8, 10] and target value 3", ()=>{
		const res = sut([5, 7, 7, 8, 8, 10], 3);
		expect(res[0]).to.equal(-1);
		expect(res[1]).to.equal(-1);
	});

	it("should return [-1, -1] given [5, 7, 7, 8, 8, 10] and target value 11", ()=>{
		const res = sut([5, 7, 7, 8, 8, 10], 11);
		expect(res[0]).to.equal(-1);
		expect(res[1]).to.equal(-1);
	});
});