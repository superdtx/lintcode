/**
113. 删除排序链表中的重复数字 II
给定一个排序链表，删除所有重复的元素只留下原链表中没有重复的元素。

Example
给出 1->2->3->3->4->4->5->null，返回 1->2->5->null

给出 1->1->1->2->3->null，返回 2->3->null
**/

/**
 * @param head: head is the head of the linked list
 * @return: head of the linked list
 */

import LinkedList, { ListNode } from "./LinkedList";

const deleteDuplicates = function(head) {
	if (!head) {
		return head;
	}

	let dummy = new ListNode(0);
	dummy.next = head;

	let pointer = dummy;
	while (!!pointer.next && !!pointer.next.next) {
		if (pointer.next.val === pointer.next.next.val) {
			const val = pointer.next.val;
			while (!!pointer.next && pointer.next.val === val) {
				pointer.next = pointer.next.next;
			}
		} else {
			pointer = pointer.next;
		}
	}

	return dummy.next;
};

export default deleteDuplicates;
