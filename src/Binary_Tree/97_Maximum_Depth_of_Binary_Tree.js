/**
97. Maximum Depth of Binary Tree
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example
Given a binary tree as follow:

  1
 / \ 
2   3
   / \
  4   5  
The maximum depth is 3.
 */

/**
 * @param root: The root of binary tree.
 * @return: An integer
 */
export default function maxDepth(root) {
    
    if(!root){
        return 0;
    }
    
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    
    return 1+Math.max(left, right);
}
