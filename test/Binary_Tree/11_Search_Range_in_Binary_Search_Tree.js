import sut from "../../src/Binary_Tree/11_Search_Range_in_Binary_Search_Tree";
import BinaryTree, { TreeNode } from "../../src/Binary_Tree/BinaryTree";
import { expect } from 'chai';

describe("Search_Range_in_Binary_Search_Tree", () => {
	it("return [1,2] when seach [2,1] in range of [0, 4]", ()=>{
		const binarytree = new BinaryTree([2,1]);
		const res = sut(binarytree, 0,4);
		expect(res).eqls([1,2]);
	});

	it("return [12,20,22] when seach [20,8,22,4,12] in range of [10, 22]", ()=>{
		const binarytree = new BinaryTree([20,8,22,4,12]);
		const res = sut(binarytree, 10,22);
		expect(res).eqls([12,20,22]);
	});

	it("return [-4,0,3,9,27,30,59,62,63,64,69] when seach [98,97,#,88,#,84,#,79,87,64,#,#,#,63,69,62,#,#,#,30,#,27,59,9,#,#,#,3,#,0,#,-4,#,-16,#,-18,-7,-19,#,#,#,-23,#,-34,#,-42,#,-59,#,-63,#,-64,#,-69,#,-75] in range of [-5, 77]", ()=>{
		const binarytree = new BinaryTree([98,97,'#',88,'#',84,'#',79,87,64,'#','#','#',63,69,62,'#','#','#',30,'#',27,59,9,'#','#','#',3,'#',0,'#',-4,'#',-16,'#',-18,-7,-19,'#','#','#',-23,'#',-34,'#',-42,'#',-59,'#',-63,'#',-64,'#',-69,'#',-75]);
		const res = sut(binarytree, -5,77);
		expect(res).eqls([-4,0,3,9,27,30,59,62,63,64,69]);
	});
});