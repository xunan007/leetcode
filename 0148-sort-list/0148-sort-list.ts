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

function sortList(head: ListNode | null): ListNode | null {
    // 归并排序-递归的形式
    const getMid = (head: ListNode): ListNode => {
        let dummy = new ListNode();
        dummy.next = head;
        let slow = dummy;
        let fast = dummy;
        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let mid = slow.next;
        slow.next = null;
        return mid;
    }
    const mergeSortList = (h1: ListNode, h2: ListNode): ListNode => {
        let dummy = new ListNode();
        let p = dummy;
        while(h1 && h2) {
            if (h1.val < h2.val) {
                p.next = h1;
                h1 = h1.next;
            } else {
                p.next = h2;
                h2 = h2.next;
            }
            p = p.next;
        }
        if (h1) {
            p.next = h1;
        } else {
            p.next = h2;
        }
        return dummy.next;
    }
    // 终止条件
    if (head === null) {
        return null;
    }
    if (head && head.next === null) {
        return head;
    }
    // 1. 找中点
    let mid = getMid(head);
    // 2. 减小规模
    let h1 = sortList(head);
    let h2 = sortList(mid);
    // 3. 合并
    let result = mergeSortList(h1, h2);
    return result;
};