/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function(head) {
    if(!head){
        return null;
    }
    
    return buildBST(head, 0, findLength(head) - 1);
};

const buildBST = function(head, start, end){
    if(start > end){
        return null;
    }
    
    let point = head;
    const mid = start + Math.floor((end - start)/2);
    for(let i = 0; i < mid; i++){
        point = point.next;
    }
    const node = new TreeNode(point.val);
    node.left = buildBST(head, start, mid - 1);
    node.right = buildBST(head, mid + 1, end);
    
    return node;
}

const findLength = function(head){
    let size = 0;
    
    while(head){
        head = head.next;
        size ++;
    }
    
    return size;
}

export default sortedListToBST;