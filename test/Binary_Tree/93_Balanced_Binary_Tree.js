import sut from "../../src/Binary_Tree/93_Balanced_Binary_Tree";
import BinaryTree from "../../src/Binary_Tree/BinaryTree";
import { expect } from 'chai';

describe("Balanced_Binary_Tree", () => {
	it("should return false given [1,2,3,4,#,5,6,7,8,9,10,11,12]", () => {
		const binarytree = new BinaryTree([1,2,3,4,'#',5,6,7,8,9,10,11,12]);
		const res = sut(binarytree);
		expect(res).to.be.false;
	});
});
