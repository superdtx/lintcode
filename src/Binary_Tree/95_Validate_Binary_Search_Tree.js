/**
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
A single node tree is a BST
Example
An example:

  2
 / \
1   4
   / \
  3   5
The above binary tree is serialized as {2,1,4,#,#,3,5} (in level order).
**/

/**
 * @param root: The root of binary tree.
 * @return: True if the binary tree is BST, or false
 */
class ResultType {
	constructor(isBST) {
		this.isBST = isBST;
		this.maxNode = null;
		this.minNode = null;
	}
}

export default function isValidBST(root) {
	return helper(root).isBST;
}

function helper(root) {
	if (!root) {
		return new ResultType(true);
	}

	const left = helper(root.left);
	const right = helper(root.right);

	if (!left.isBST || !right.isBST) {
		return new ResultType(false);
	}

	if (!!left.maxNode && left.maxNode.value >= root.value) {
		return new ResultType(false);
	}

	if (!!right.minNode && right.minNode.value <= root.value) {
		return new ResultType(false);
	}

	const result = new ResultType(true);
	result.minNode = left.minNode ? left.minNode : root;
	result.maxNode = right.maxNode ? right.maxNode : root;
	return result;
}
