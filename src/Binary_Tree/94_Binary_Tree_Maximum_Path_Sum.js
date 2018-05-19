/**
Given a binary tree, find the maximum path sum.

The path may start and end at any node in the tree.

Example
Given the below binary tree:

  1
 / \
2   3
return 6.
**/

export default function maxPathSum(root) {
	const result = helper(root);

	return result.maxPath;
}

class ResultType {
	constructor(singlePath, maxPath) {
		this.singlePath = singlePath;
		this.maxPath = maxPath;
	}
}

function helper(root) {
	if (!root) {
		return new ResultType(0, Number.NEGATIVE_INFINITY);
	}

	const left = helper(root.left);
	const right = helper(root.right);

	let singlePath = Math.max(left.singlePath + root.val, right.singlePath + root.val, 0);

	let maxPath = Math.max(
		left.singlePath + right.singlePath + root.val,
		left.maxPath,
		right.maxPath
	);

	return new ResultType(singlePath, maxPath);
}
