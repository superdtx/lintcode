import sut from "../../src/Linked_List/113_Remove_Duplicates_from_Sorted_List_II";
import LinkedList from "../../src/Linked_List/LinkedList";
import { expect } from 'chai';

describe("Remove_Duplicates_from_Sorted_List_II", () => {
	it("should return 1->2->5->null given 1->2->3->3->4->4->5->null", () => {
		const linkedlist = new LinkedList([1,2,3,3,4,4,5]);
		const res = sut(linkedlist);
		expect(LinkedList.linkedListTraverse(res)).to.eqls([1,2,5]);
	});

	it("should return 2->3->null given 1->1->1->2->3->null", () => {
		const linkedlist = new LinkedList([1,1,1,2,3]);
		const res = sut(linkedlist);
		expect(LinkedList.linkedListTraverse(res)).to.eqls([2,3]);
	});
});
