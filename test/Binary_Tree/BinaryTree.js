import BinaryTree from "../../src/Binary_Tree/BinaryTree";
import { expect } from 'chai';

describe("BinaryTree", ()=>{
	it("should generate a tree given [1, 2, 3, 4, 5, 6, 7]", ()=>{
		const tree = new BinaryTree([1, 2, 3, 4, 5, 6, 7]);
		const res = [];
		BinaryTree.preOrderTraverse(tree, res);
		expect(res).to.eql([1,2,4,5,3,6,7]);
	});

	it("should generate a tree given [1, 2, #, 3, #, #, #]", ()=>{
		const tree = new BinaryTree([1, 2, '#', 3, '#', '#', '#']);
		const res = [];
		BinaryTree.preOrderTraverse(tree, res);
		expect(res).to.eql([1,2,3]);
	});

	it("should generate a tree given [1, 2, 3, 4, #, #, 5]", ()=>{
		const tree = new BinaryTree([1, 2, 3, 4, '#', '#', 5]);
		const res = [];
		BinaryTree.preOrderTraverse(tree, res);
		expect(res).to.eql([1,2,4,3,5]);
	});
});