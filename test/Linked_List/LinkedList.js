import LinkedList from "../../src/Linked_List/LinkedList";
import { expect } from 'chai';

describe("LinkedList", ()=>{
	it("should generate a linked list given [1, 2, 3, 4, 5, 6, 7]", ()=>{
		const linkedList = new LinkedList([1, 2, 3, 4, 5, 6, 7]);
		const res = LinkedList.linkedListTraverse(linkedList);
		expect(res).to.eql([1,2,3,4,5,6,7]);
	});

	xit("should generate a linkedList given []", ()=>{
		const linkedList = new LinkedList([]);
		const res = LinkedList.linkedListTraverse(linkedList);
		expect(res).to.eql([]);
	});
});