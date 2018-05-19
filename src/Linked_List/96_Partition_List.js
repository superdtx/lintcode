/*
	Description
	Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

	You should preserve the original relative order of the nodes in each of the two partitions.

	Have you met this question in a real interview?  
	Example
	Given 1->4->3->2->5->2->null and x = 3,
	return 1->2->2->4->3->5->null.
 */

 /**
 * @param head: The first node of linked list
 * @param x: An integer
 * @return: A ListNode
 */
const partition = function (head, x) {
    const leftDummy = new ListNode(0);
    const rightDummy = new ListNode(0);
    let left = leftDummy, right = rightDummy;
    
    while(head !== null){
        if(head.val < x){
            left.next = head;
            left = head;
        } else {
            right.next = head;
            right = head;
        }
        head = head.next;
    }
    
    right.next = null;
    left.next = rightDummy.next;
    
    return leftDummy.next;
}


