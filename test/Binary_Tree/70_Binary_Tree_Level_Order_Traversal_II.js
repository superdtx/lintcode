import sut from "../../src/Binary_Tree/70_Binary_Tree_Level_Order_Traversal_II";
import BinaryTree, { TreeNode } from "../../src/Binary_Tree/BinaryTree";
import { expect } from "chai";

describe("Binary_Tree_Level_Order_Traversal_II", () => {
	it("should return 2d array given [3,9,20,#,#,15,7]", () => {
		const binarytree = new BinaryTree([3, 9, 20, "#", "#", 15, 7]);
		const res = sut(binarytree);
		expect(res).to.eqls([[15, 7], [9, 20], [3]]);
	});
});
