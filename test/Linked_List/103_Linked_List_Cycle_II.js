import sut from "../../src/Linked_List/103_Linked_List_Cycle_II";
import LinkedList, { ListNode } from "../../src/Linked_List/LinkedList";
import { expect } from 'chai';

describe("Linked_List_Cycle_II", () => {
	it("should return true given 1->2->3->3->4->4->5->null", () => {
		const linkedlist = new LinkedList([1,2,4,3,4,4,5]);
		const res = sut(linkedlist);
		expect(res).to.equals(null);
	});

	it("should return false given 1->2*->3->5->4->2*", () => {

		const node1 = new ListNode(1);
		const node2 = new ListNode(2);
		const node3 = new ListNode(3);
		const node5 = new ListNode(5);
		const node4 = new ListNode(4);

		node1.next = node2;
		node2.next = node3;
		node3.next = node5;
		node5.next = node4;
		node4.next = node2;

		const res = sut(node1);
		expect(res.val).to.equals(2);
	});

	it("should return false given 1*->2->3->5->4->1*", () => {

		const node1 = new ListNode(1);
		const node2 = new ListNode(2);
		const node3 = new ListNode(3);
		const node5 = new ListNode(5);
		const node4 = new ListNode(4);

		node1.next = node2;
		node2.next = node3;
		node3.next = node5;
		node5.next = node4;
		node4.next = node1;

		const res = sut(node1);
		expect(res.val).to.equals(1);
	});
});