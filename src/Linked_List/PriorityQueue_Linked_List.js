class Node {
	constructor(val, priority) {
		this.value = val;
		this.priority = priority;
		this.next = null;
	}
}

class PriorityQueue {
	constructor() {
		this.first = null;
	}

	static insert(value, priority) {
		const newNode = new Node(value, priority);
		if (!this.first || priority > this.first.priority) {
			newNode.next = this.first;
			this.first = newNode;
		} else {
			let pointer = this.first;
			while (pointer.next && priority < pointer.next.priority) {
				pointer = pointer.next;
			}
			newNode.next = pointer.next;
			pointer.next = newNode;
		}
	}

	static remove() {
		const first = this.first;
		this.first = this.first.next;
		return first;
	}
}
