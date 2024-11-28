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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let p = dummy;
    let left = 0;
    while (l1 || l2) {
        let sum = left;
        if (l1) {
            sum += l1.val;
        }
        if (l2) {
            sum += l2.val;
        }
        // 判断是否需要进位
        if (sum >= 10) {
            left = 1;
        } else {
            left = 0;
        }

        p.next = new ListNode(sum % 10);
        p = p.next;

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }

    // 最后一位还要进位
    if (left === 1) {
        p.next = new ListNode(1);
    }

    return dummy.next;
};