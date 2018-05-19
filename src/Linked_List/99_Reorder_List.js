/*
Description
Given a singly linked list L: L0 → L1 → … → Ln-1 → Ln

reorder it to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

Have you met this question in a real interview?  
Example
Given 1->2->3->4->null, reorder it to 1->4->2->3->null.

Challenge
Can you do this in-place without altering the nodes' values?
*/

/**
 * @param head: The head of linked list.
 * @return: 
 */

import LinkedList, { ListNode } from "../../src/Linked_List/LinkedList";

const reorderList = function (head) {
    if(!head || !head.next){
    	return;
    }

    const mid = findMiddle(head);
    const tail = reverse(mid.next);
    //critical
    mid.next = null;

    merge(head, tail);
}

const findMiddle = function (head) {
	let slow = head;
	let fast = head.next;

	while(fast && fast.next){
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

const reverse = function(head){
	let prev = null;
	while(head){
		const tmp = head.next;
		head.next = prev;

		prev = head;
		head = tmp;
	}
	return prev;
}

const merge = function(A, B){
	let index = 0;
	let dummyNode = new ListNode(0);

	while(A && B){
		if(index % 2 === 0){
			dummyNode.next = A;
			A = A.next;
		} else {
			dummyNode.next = B;
			B = B.next;
		}

		dummyNode = dummyNode.next;
		index++;
	}

	if(A){
		dummyNode.next = A;
	} else {
		dummyNode.next = B;
	}
}

export default reorderList;
