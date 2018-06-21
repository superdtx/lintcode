export default class LinkedList {
	constructor(array) {
		if (array.length === 0) {
			return null;
		}

		const head = new ListNode(array[0]);
		let pointer = head;

		for (let i = 1; i < array.length; i++) {
			let tmp = new ListNode(array[i]);
			pointer.next = tmp;
			pointer = pointer.next;
		}

		return head;
	}

	static linkedListTraverse(head) {
		const result = [];

		while (!!head) {
			result.push(head.val);
			head = head.next;
		}

		return result;
	}
}

export class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

export class RandomListNode {
	constructor(val) {
		this.val = val;
		this.next = this.random = null;
	}
}
