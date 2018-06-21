import sut from "../../src/Linked_List/104_Merge_K_Sorted_Lists";
import LinkedList, { ListNode } from "../../src/Linked_List/LinkedList";
import { expect } from 'chai';

describe("Merge_K_Sorted_Lists", () => {
	it("should return -1->2->4 given [2->4->null, null, -1->null]", () => {
		const list1 = new LinkedList([2, 4]);
		const list2 = new LinkedList([-1]);
		const res = sut([list1, null, list2]);
		expect(LinkedList.linkedListTraverse(res)).to.eqls([-1, 2, 4]);
	});

	it("should return correct value given [[1,4,5],[1,3,4],[2,6]]", () => {
		const list1 = new LinkedList([1,4,5]);
		const list2 = new LinkedList([1,3,4]);
		const list3 = new LinkedList([2, 6]);
		const res = sut([list1, list2, list3]);
		expect(LinkedList.linkedListTraverse(res)).to.eqls([1, 1, 2, 3, 4, 4, 5, 6]);
	});
});