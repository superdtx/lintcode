import sut from "../../src/Binary_Search/8_Rotate_String";
import { expect } from "chai";

describe("Rotate_String", () => {
	it("should return 'abcdefg' given 'abcdefg' and offset=0", () => {
		let s = "abcdefg";
		sut(s, 0);
		expect(s).to.equals("abcdefg");
	});

	it("should return 'gabcdef' given 'abcdefg' and offset=1", () => {
		let s = "abcdefg";
		sut(s, 1);
		expect(s).to.equals("gabcdef");
	});

	it("should return 'fgabcde' given 'abcdefg' and offset=2", () => {
		let s = "abcdefg";
		sut(s, 2);
		expect(s).to.equals("fgabcde");
	});

	it("should return 'efgabcd' given 'abcdefg' and offset=3", () => {
		let s = "abcdefg";
		sut(s, 3);
		expect(s).to.equals("efgabcd");
	});
});
