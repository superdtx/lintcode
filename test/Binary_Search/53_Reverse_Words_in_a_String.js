import sut from "../../src/Binary_Search/53_Reverse_Words_in_a_String";
import { expect } from "chai";

describe("Reverse_Words_in_a_String", () => {
	it("should return '' given ''", () => {
		expect(sut("")).to.equals("");
	});

	it("should return 'word' given 'word'", () => {
		expect(sut("word")).to.equals("word");
	});

	it("should return 'you? are How' given 'How are you?'", () => {
		expect(sut("How are you?")).to.equals("you? are How");
	});

	it("should return 'blue is sky the' given 'the sky is blue '", () => {
		expect(sut("the sky is blue ")).to.equals("blue is sky the");
	});

	it("should return 'blue is sky the' given ' the sky is blue'", () => {
		expect(sut(" the sky is blue")).to.equals("blue is sky the");
	});

	it("should return 'blue is sky the' given ' the   sky  is  blue'", () => {
		expect(sut(" the sky is blue")).to.equals("blue is sky the");
	});
});
