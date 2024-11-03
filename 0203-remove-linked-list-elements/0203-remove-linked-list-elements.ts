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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let vp = new ListNode(0);
    vp.next = head;

    let p = vp.next;
    let pp = vp;
    while(p) {
        if (p.val === val) {
            pp.next = p.next;
        } else {
            pp = p;
        }
        p = p.next;
    }

    return vp.next;
};