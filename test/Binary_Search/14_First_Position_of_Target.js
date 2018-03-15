import sut from "../../src/Binary_Search/14_First_Position_of_Target";
import { expect } from 'chai';

describe("First_Position_of_Target", () => {
	it("should return 2 given [1, 2, 3, 3, 4, 5, 10] and target value 3", () => {
		const res = sut([1, 2, 3, 3, 4, 5, 10], 3);
		expect(res).to.equal(2);
	});

	it("should return 6 given [1, 2, 3, 3, 4, 5, 10] and target value 10", () => {
		const res = sut([1, 2, 3, 3, 4, 5, 10], 10);
		expect(res).to.equal(6);
	});

	it("should return -1 given [1, 2, 3, 3, 4, 5, 10] and target value 0", () => {
		const res = sut([1, 2, 3, 3, 4, 5, 10], 0);
		expect(res).to.equal(-1);
	});

	it("should return -1 given [1, 2, 3, 3, 4, 5, 10] and target value 11", () => {
		const res = sut([1, 2, 3, 3, 4, 5, 10], 11);
		expect(res).to.equal(-1);
	});
});
