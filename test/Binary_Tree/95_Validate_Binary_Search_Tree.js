import sut from "../../src/Binary_Tree/95_Validate_Binary_Search_Tree";
import BinaryTree from "../../src/Binary_Tree/BinaryTree";
import { expect } from 'chai';

describe("Validate_Binary_Search_Tree", () => {
	it("should return true given [-1]", () => {
		const binarytree = new BinaryTree([-1]);
		const res = sut(binarytree);
		expect(res).to.be.true;
	});

	it("should return false given [1,#,2,3]", () => {
		const binarytree = new BinaryTree([1,'#',2,3]);
		const res = sut(binarytree);
		expect(res).to.be.false;
	});
});