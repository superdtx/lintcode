import sut from "../../src/Binary_Tree/85_Insert_Node_in_a_Binary_Search_Tree";
import BinaryTree, { TreeNode } from "../../src/Binary_Tree/BinaryTree";
import { expect } from 'chai';

describe("Insert_Node_in_a_Binary_Search_Tree", () => {
	it("should return [2,1,4,#,#,3,6] given [2,1,4,#,#,3,#] and 6", () => {
		const binarytree = new BinaryTree([2,1,4,'#','#',3,'#']);
		const A = new TreeNode(6);
		const res = sut(binarytree, A);
		const output = [];
		BinaryTree.preOrderTraverse(res, output);
		expect(output).to.eqls([2,1,4,3,6]);
	});
});
