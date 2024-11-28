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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // N = 1 + F(N-1)
    // 合并两个链表 => 头节点 + 一整个链表 
    let p: ListNode = null;
    // 都是空的
    if (!list1 && !list2) {
        return p;
    }
    if (list1 && !list2) {
        p = new ListNode(list1.val);
        p.next = mergeTwoLists(list1.next, null);
    } else if (!list1 && list2) {
        p = new ListNode(list2.val);
        p.next = mergeTwoLists(null, list2.next);
    } else {
        if (list1.val < list2.val) {
            p = new ListNode(list1.val);
            p.next = mergeTwoLists(list1.next, list2);
        } else {
            p = new ListNode(list2.val);
            p.next = mergeTwoLists(list1, list2.next);
        }
    }

    return p;

};