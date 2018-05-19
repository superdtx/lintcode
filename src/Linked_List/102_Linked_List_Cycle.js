/*
102. Linked List Cycle
Given a linked list, determine if it has a cycle in it.



Example
Given -21->10->4->5, tail connects to node index 1, return true

Challenge
Follow up:
Can you solve it without using extra space?
*/

import LinkedList, { ListNode } from "../../src/Linked_List/LinkedList";

const hasCycle = function(head){

	let slow = head;
	let fast = head.next;

	while(fast && fast.next){
		if(fast === slow){
			return true;
		}

		fast = fast.next.next;
		slow = slow.next;
	}

	return false;
};

export default hasCycle;