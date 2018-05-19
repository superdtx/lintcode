/**
Given the root and two nodes in a Binary Tree. Find the lowest common ancestor(LCA) of the two nodes.

The lowest common ancestor is the node with largest depth which is the ancestor of both nodes.

Example
For the following binary tree:

  4
 / \
3   7
   / \
  5   6
LCA(3, 5) = 4

LCA(5, 6) = 7

LCA(6, 7) = 7
**/

export default function  lowestCommonAncestor(root, A, B){
    if(!root || root.value === A.value || root.value === B.value){
        return root;
    }
    
    const left = lowestCommonAncestor(root.left, A, B);
    const right = lowestCommonAncestor(root.right, A, B);
    
    if(left !== null && right !== null){
        return root;
    }
    
    if(left !== null){
        return left;
    }
    
    if(right !== null){
        return right;
    }
    
    return null;
}