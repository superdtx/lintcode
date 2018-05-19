import sut from "../../src/Binary_Tree/71_Binary_Tree_Zigzag_Level_Order_Traversal";
import BinaryTree, { TreeNode } from "../../src/Binary_Tree/BinaryTree";
import { expect } from "chai";

describe("Binary_Tree_Zigzag_Level_Order_Traversal", () => {
	it("should return 2d array given [3,9,20,#,#,15,7]", () => {
		const binarytree = new BinaryTree([3, 9, 20, "#", "#", 15, 7]);
		const res = sut(binarytree);
		expect(res).to.eqls([[3], [20, 9], [15, 7]]);
	});
});
