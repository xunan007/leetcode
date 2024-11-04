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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) {
        return null;
    }
    let slow = head;

    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    let fast = dummyNode;
    for(let i=0; i<n; i++) {
        if (fast === null) {
            break;
        }
        fast = fast.next;
    }
    if (fast === null) {
        return head;
    }

    let prev = dummyNode;
    while(fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }

    prev.next = slow.next;

    return dummyNode.next;
};