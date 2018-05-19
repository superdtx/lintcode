/*
Description
Given a linked list, return the node where the cycle begins.

If there is no cycle, return null.

Have you met this question in a real interview?  
Example
Given -21->10->4->5, tail connects to node index 1，return 10

Challenge
Follow up:

Can you solve it without using extra space?
*/

const detectCycle = function(head){

	let slow = head;
	let fast = head.next;

	while( fast !== slow){
		if(!fast || !fast.next){
			return null;
		}

		fast = fast.next.next;
		slow = slow.next;
	}

	while(head !== slow.next){
		head = head.next;
		slow = slow.next;
	}

	return head;
}

export default detectCycle;