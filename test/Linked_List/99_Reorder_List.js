import sut from "../../src/Linked_List/99_Reorder_List";
import LinkedList from "../../src/Linked_List/LinkedList";
import { expect } from 'chai';

describe("Reorder_List", () => {
	it("should return 1->5->2->4->3->null given 1->2->3->4->5->null", () => {
		const linkedlist = new LinkedList([1,2,3,4,5]);
		sut(linkedlist);
		expect(LinkedList.linkedListTraverse(linkedlist)).to.eqls([1,5,2,4,3]);
	});

	it("should return 1->6->2->5->3->4->null given 1->2->3->4->5->6->null", () => {
		const linkedlist = new LinkedList([1,2,3,4,5,6]);
		sut(linkedlist);
		expect(LinkedList.linkedListTraverse(linkedlist)).to.eqls([1,6,2,5,3,4]);
	});
});
