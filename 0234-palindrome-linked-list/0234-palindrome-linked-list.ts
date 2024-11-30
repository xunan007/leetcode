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

function isPalindrome(head: ListNode | null): boolean {
    if (head === null) {
        return false;
    }
    if (head.next === null) {
        return true;
    }
    // 先找到链表的中点
    let dummy = new ListNode();
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let head2 = slow.next;
    slow.next = null;
    // 后面半截的链表开始反转
    let prev: ListNode = null;
    let cur: ListNode = head2;
    while(cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    head2 = prev;
    console.log(head, head2);
    // 开始匹配
    while(head && head2) {
        if (head.val !== head2.val) {
            return false;
        }
        head = head.next;
        head2 = head2.next;
    }
    if (!head && !head2 || !head && head2) {
        return true;
    }
    return false;
};