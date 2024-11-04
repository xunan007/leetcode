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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) {
        return null;
    }

    const a = headA;
    const b = headB;

    while (headA !== headB) {
        if (headA.next === null && headB.next === null) {
            return null;
        }

        if (headA.next === null) {
            headA = b;
        } else {
            headA = headA.next;
        }
        if (headB.next === null) {
            headB = a;
        } else {
            headB = headB.next;
        }
    }

    return headA;

};