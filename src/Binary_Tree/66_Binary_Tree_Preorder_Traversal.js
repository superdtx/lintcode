/*
Given a binary tree, return the preorder traversal of its nodes' values.

Have you met this question in a real interview?  
Example
Given:

    1
   / \
  2   3
 / \
4   5
return [1,2,4,5,3].

Challenge
Can you do it without recursion?
*/

/**
 * @param root: A Tree
 * @return: Preorder in ArrayList which contains node values.
 */

//non-recursive
export default function preorderTraversal(root) {
	const stack = [];
	const preorder = [];

	if(!root){
		return preorder;
	}

	stack.push(root);

	while(stack.length > 0){
		const tmp = stack.pop();
		preorder.push(tmp.val);

		if(tmp.right){
			stack.push(tmp.right);
		}
		
		if(tmp.left){
			stack.push(tmp.left);
		}
	}

	return preorder;
}

// recursive
// const preorderTraversal = function (root) {
	
// 	const preorder = [];
// 	const preorderRecursive = function(root, preorder){
// 		if(!root){
// 			return;
// 		}

// 		preorder.push(root.val);
// 		preorderRecursive(root.left, preorder);
// 		preorderRecursive(root.right, preorder);
// 	}

// 	preorderRecursive(root, preorder);

// 	return preorder;
// }

// divide and conquer
// const preorderTraversal = function (root) {
// 	const preorder = [];

// 	if(!root){
// 		return preorder;
// 	}

// 	const left = preorderTraversal(root.left);
// 	const right = preorderTraversal(root.right);

// 	preorder.push(root.val);
// 	return preorder.concat(left).concat(right);
// }
