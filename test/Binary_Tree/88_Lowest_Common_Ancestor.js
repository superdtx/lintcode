import sut from "../../src/Binary_Tree/88_Lowest_Common_Ancestor";
import BinaryTree, { TreeNode } from "../../src/Binary_Tree/BinaryTree";
import { expect } from 'chai';

describe("Balanced_Binary_Tree", () => {
	it("should return 4 given [4,3,7,#,#,5,6] and 3, 5", () => {
		const binarytree = new BinaryTree([4,3,7,'#','#',5,6]);
		const A = new TreeNode(3);
		const B = new TreeNode(5);
		const res = sut(binarytree, A, B);
		expect(res.value).to.equals(4);
	});

	it("should return 4 given [4,3,7,#,#,5,6] and 6, 5", () => {
		const binarytree = new BinaryTree([4,3,7,'#','#',5,6]);
		const A = new TreeNode(6);
		const B = new TreeNode(5);
		const res = sut(binarytree, A, B);
		expect(res.value).to.equals(7);
	});

	it("should return 4 given [4,3,7,#,#,5,6] and 6, 7", () => {
		const binarytree = new BinaryTree([4,3,7,'#','#',5,6]);
		const A = new TreeNode(6);
		const B = new TreeNode(7);
		const res = sut(binarytree, A, B);
		expect(res.value).to.equals(7);
	});
});
