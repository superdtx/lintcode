import sut from "../../src/Binary_Tree/94_Binary_Tree_Maximum_Path_Sum";
import BinaryTree, { TreeNode } from "../../src/Binary_Tree/BinaryTree";
import { expect } from 'chai';

describe("94_Binary_Tree_Maximum_Path_Sum", () => {
	xit("should return -5 given [-10,-20,#,#,-31,-24,-5,#,#,-6,-7,-8,-9]", ()=>{
		const binarytree = new BinaryTree([-10,-20,'#','#',-31,-24,-5,'#','#',-6,-7,-8,-9]);
		const result = sut(binarytree);
		expect(result).to.equals(-5);
	});
});
