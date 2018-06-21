/*
104. Merge K Sorted Lists
Merge k sorted linked lists and return it as one sorted list.

Analyze and describe its complexity.

Example
Given lists:

[
  2->4->null,
  null,
  -1->null
],
return -1->2->4->null.
*/
import { ListNode } from "./LinkedList";

const mergeKLists = function(lists) {
	if (!lists.length) {
		return null;
	}

	return mergeHelper(lists, 0, lists.length - 1);
};

const mergeHelper = function(lists, start, end) {
	if (start === end) {
		return lists[start];
	}

	const mid = start + Math.floor((end - start) / 2);
	const left = mergeHelper(lists, start, mid);
	const right = mergeHelper(lists, mid + 1, end);

	return mergeTwoList(left, right);
};

const mergeTwoList = function(list1, list2) {
	const dummy = new ListNode(0);
	let tail = dummy;

	while (list1 && list2) {
		if (list1.val < list2.val) {
			tail.next = list1;
			tail = list1;
			list1 = list1.next;
		} else {
			tail.next = list2;
			tail = list2;
			list2 = list2.next;
		}
	}

	if (list1) {
		tail.next = list1;
	} else {
		tail.next = list2;
	}

	return dummy.next;
};

export default mergeKLists;
