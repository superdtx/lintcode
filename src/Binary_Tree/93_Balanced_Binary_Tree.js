/**
 Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example
Given binary tree A = {3,9,20,#,#,15,7}, B = {3,#,20,15,7}

A)  3            B)    3 
   / \                  \
  9  20                 20
    /  \                / \
   15   7              15  7
The binary tree A is a height-balanced binary tree, but B is not.
 */

/**
 * @param root: The root of binary tree.
 * @return: True if this Binary tree is Balanced, or false.
 */
export default function isBalanced(root) {
	return isChildBalanced(root) != -1;
};

function isChildBalanced(root) {
	if (!root) {
		return 0;
	}

	const left = isChildBalanced(root.left);
	const right = isChildBalanced(root.right);

	if (left === -1 || right === -1 || Math.abs(right - left) > 1) {
		return -1;
	}

	return 1 + Math.max(left, right);
}
