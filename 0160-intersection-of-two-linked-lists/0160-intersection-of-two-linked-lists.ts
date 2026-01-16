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
    let p1 = headA;
    let p2 = headB;
    // 命中很容易，怎么判断不命中

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
        // 等长相交的话下一轮直接命中while的条件了根本进不来
        // 同时命中尾巴只有两种情况，不相交（等长/不等长）
        if (p1 === null && p2 === null) {
            return null;
        }
        if (p1 === null) {
            p1 = headB;
        }
        if (p2 === null) {
            p2 = headA;
        }
    }

    return p1;
};

a b c
d e f
