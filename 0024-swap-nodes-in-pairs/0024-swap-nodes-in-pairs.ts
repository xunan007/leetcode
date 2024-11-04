/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }
    if (head.next === null) {
        return head;
    }

    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    let curNode = dummyNode;
    while(curNode && curNode.next && curNode.next.next) {
        let a = curNode.next;
        let b = curNode.next.next;
        // cur -> b -> a
        curNode.next = b;
        a.next = b.next;
        b.next = a;
        curNode = a;
    }

    return dummyNode.next;
};