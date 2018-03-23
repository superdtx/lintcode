import sut from "../../src/Binary_Search/38_Search_a_2D_Matrix_II";
import { expect } from "chai";

describe("Search_A_2d_Matrix_II", ()=>{
	it("should return true given target found in 2d matrix", ()=>{
		const matrix = [
			[1, 3, 5, 7],
			[2, 4, 7, 8],
			[3, 5, 9, 10]
		];

		expect(sut(matrix, 3)).to.equals(2);
	})
});