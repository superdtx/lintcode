import sut from "../../src/Binary_Tree/86_Binary_Search_Tree_Iterator";
import BinaryTree, { TreeNode } from "../../src/Binary_Tree/BinaryTree";
import { expect } from 'chai';

describe("Binary_Search_Tree_Iterator", () => {
	it("should return [1, 6, 10, 11, 12] given [10,1,11,#,6,#,12]", () => {
		const binarytree = new BinaryTree([10,1,11,'#',6,'#',12]);
		const output = [];

		const bstIterator = new sut(binarytree);

		while(bstIterator.hasNext()){
			output.push(bstIterator.next().value);
		}

		expect(output).to.eqls([1, 6, 10, 11, 12]);
	});
});
