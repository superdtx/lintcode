/*
105. Copy List with Random Pointer
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

Challenge
Could you solve it with O(1) space?
*/

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

import { RandomListNode } from "./LinkedList";

const copyRandomList2 = function(head){
	if(!head){
		return null;
	}

	const dummy = new RandomListNode(0);
	dummy.next = head;

	copyList(dummy.next);
	linkRandom(dummy.next);
	removeOriginalNode(dummy);

	return dummy.next;
};

const copyList = function(head){
	while(head){
        const newNode = new RandomListNode(head.val);
        newNode.next = head.next;
        newNode.random = head.random;
        
        head.next = newNode;
        head = head.next.next;
    };
}

const linkRandom = function(head){
	while(head){
		if(head.random){
			head.next.random = head.random.next;
		}
		head = head.next.next;
	}
}

const removeOriginalNode = function(head){
	const pointer = head;
	while(pointer && pointer.next){
		pointer.next = pointer.next.next;
	}
}


// Hash Map
const copyRandomList1 = function(head){
	if(!head){
		return null;
	}

	const map = new Map();
	const dummy = new RandomListNode(0);
	let prev = dummy;
	let newNode;

	while(head){
		if(map.has(head)){
			newNode = map.get(head);
		} else {
			newNode = new RandomListNode(head.val);
			map.set(head, newNode);
		}

		prev.next = newNode;

		if(head.random){
			if(map.has(head.random)){
				newNode.random = map.get(head.random);
			} else {
				newNode.random = new RandomListNode(head.random.val);
				map.set(head.ramdom, newNode.random);
			}
		}

		prev = newNode;
		head = head.next;
	}

	return dummy.next;
};

export {copyRandomList1, copyRandomList2};