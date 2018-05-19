/**
Description
Reverse a linked list from position m to n.

Given m, n satisfy the following condition: 1 ≤ m ≤ n ≤ length of list.

Have you met this question in a real interview?  
Example
Given 1->2->3->4->5->NULL, m = 2 and n = 4, return 1->4->3->2->5->NULL.

Challenge
Reverse it in-place and in one-pass
 */

/**
 * @param head: ListNode head is the head of the linked list 
 * @param m: An integer
 * @param n: An integer
 * @return: The head of the reversed ListNode
 */
const reverseBetween = function (head, m, n) {
    
    const dummy = new ListNode(0);
    dummy.next = head;
    head = dummy;
    
    for(let i = 1; i<m;i++){
        head = head.next;
    }
    
    const prevM = head;
    const mNode = head.next;
    head = head.next;
    
    let prev = null;
    for(let i = m; i<=n; i++){
        const tmp = head.next;
        head.next = prev;
        prev = head;
        head = tmp;
    }
    
    mNode.next = head;
    prevM.next = prev;
    
    return dummy.next;
};

export default reverseBetween;