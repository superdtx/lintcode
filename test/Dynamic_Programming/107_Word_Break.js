import sut from "../../src/Dynamic_Programming/107_Word_Break";
import { expect } from "chai";

describe("Word_Break", () => {
	it("returns true", () => {
		expect(sut('a', ['a'])).to.be.Truthy;
	});

	it("returns true", () => {
		expect(sut('leetcode', ['leet', 'code'])).to.be.true;
	});

	it("returns true", () => {
		expect(sut('applepenapple', ['apple', 'pen'])).to.be.true;
	});
});
