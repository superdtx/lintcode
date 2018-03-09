import sut from "../../src/Binary_Search/14_First_Position_of_Target";
import { expect } from 'chai';

describe("First_Position_of_Target", () => {
	it("should return 2 given [1, 2, 3, 3, 4, 5, 10] and 3", () => {
		const res = sut([1, 2, 3, 3, 4, 5, 10], 3);
		expect(res).to.equal(2);
	});
});
