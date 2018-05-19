/**
Description
Reverse a linked list.

Have you met this question in a real interview?  
Example
For linked list 1->2->3, the reversed linked list is 3->2->1

Challenge
Reverse it in-place and in one-pass
 */

/**
 * @param head: n
 * @return: The new head of reversed linked list.
 */
const reverse = function (head) {
    
    let prev = null;
    
    while(head !== null){
        const tmp = head.next;
        head.next = prev;
        prev = head;
        head = tmp;
    }
    
    return prev;
};

export default reverse;