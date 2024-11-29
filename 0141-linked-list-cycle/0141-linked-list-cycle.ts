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

function hasCycle(head: ListNode | null): boolean {
    let dummy = new ListNode();
    dummy.next = head;
    let slow = dummy.next;
    let fast = dummy.next?.next;
    while(fast && slow) {
        if (fast === slow) {
            return true;
        }
        slow = slow.next;
        fast = fast.next?.next;
    }
    return false;
};