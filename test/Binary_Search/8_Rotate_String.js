import sut from "../../src/Binary_Search/8_Rotate_String";
import { expect } from "chai";

describe("Rotate_String", () => {
	it("should return 'abcdefg' given 'abcdefg' and offset=0", () => {
		let s = "abcdefg";
		sut(s, 0);
		expect(s).to.equals("abcdefg");
	});

	xit("should return 'gabcdef' given 'abcdefg' and offset=1", () => {
		let s = "abcdefg";
		sut(s, 1);
		expect(s).to.equals("gabcdef");
	});

	xit("should return 'fgabcde' given 'abcdefg' and offset=2", () => {
		let s = "abcdefg";
		sut(s, 2);
		expect(s).to.equals("fgabcde");
	});

	xit("should return 'efgabcd' given 'abcdefg' and offset=3", () => {
		let s = "abcdefg";
		sut(s, 3);
		expect(s).to.equals("efgabcd");
	});

	xit("should return 'efgabcd' given 'abcdefg' and offset=52", () => {
		let s = "abcdefg";
		sut(s, 52);
		expect(s).to.equals("efgabcd");
	});

	it("should return '' given '' and offset=52", () => {
		let s = "";
		sut(s, 52);
		expect(s).to.equals("");
	});
});
