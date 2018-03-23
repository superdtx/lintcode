import sut from "../../src/Binary_Search/28_Search_A_2d_Matrix";
import { expect } from "chai";

describe("Search_A_2d_Matrix", ()=>{
	it("should return true given target found in 2d matrix", ()=>{
		const matrix = [
			[1,3,5,7],
			[10,11,16,20],
			[23,30,34,50]
		];

		expect(sut(matrix, 3)).to.be.true;
	})
});