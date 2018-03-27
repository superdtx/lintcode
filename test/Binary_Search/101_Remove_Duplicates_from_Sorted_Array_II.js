import sut from "../../src/Binary_Search/101_Remove_Duplicates_from_Sorted_Array_II";
import { expect } from "chai";

describe("Remove_Duplicates_from_Sorted_Array_II", () => {
	it("should return 0 given []", () => {
		expect(sut([])).to.equals(0);
	});

	it("should return 3 given [1, 2, 3]", () => {
		expect(sut([1, 2, 3])).to.equals(3);
	});

	it("should return 4 given [1, 1, 2, 2]", () => {
		expect(sut([1, 1, 2, 2])).to.equals(4);
	});

	it("should return 4 given [1, 1, 2, 2, 2]", () => {
		expect(sut([1, 1, 2, 2, 2])).to.equals(4);
	});
});
