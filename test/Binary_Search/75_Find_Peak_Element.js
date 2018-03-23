import sut from "../../src/Binary_Search/75_Find_Peak_Element";
import { expect } from 'chai';

describe('Find_Peak_Element', ()=>{
	it("should return 1 or 6 given [1, 2, 1, 3, 4, 5, 7, 6]", () => {
		const res = sut([1, 2, 1, 3, 4, 5, 7, 6]);
		expect([1, 6]).to.include(res);
	});

	it("should return 4 given [1, 2, 2, 2, 4, 3, 3, 2]", () => {
		const res = sut([1, 2, 3, 4, 5, 3, 2, 1]);
		expect(res).to.equal(4);
	});
});