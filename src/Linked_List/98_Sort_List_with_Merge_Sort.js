/**
 * @param head: The head of linked list.
 * @return: You should return the head of the sorted linked list, using constant space complexity.
 */
const sortList = function (head) {
    if(!head || !head.next){
        return head;
    }
    
    const mid = findMiddle(head);
    const right = sortList(mid.next);
    mid.next = null;
    const left = sortList(head);
    
    return merge(left, right);
};

const findMiddle = function(head){
    let p1 = head;
    let p2 = head;
    
    while(p2 && p2.next && p2.next.next){
        p1 = p1.next;
        p2 = p2.next.next;
    }
    
    return p1;
};

const merge = function(A, B){
    const dummyNode = new ListNode(0);
    let pointer = dummyNode;
    while(A && B){
        if(A.val < B.val){
            pointer.next = A;
            A = A.next;
        } else {
            pointer.next = B;
            B = B.next;
        }
        
        pointer = pointer.next;
    }
    
    if(A){
        pointer.next = A;
    } else {
        pointer.next = B;
    }
    
    return dummyNode.next;
};