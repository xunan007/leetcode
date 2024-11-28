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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // 差值为 N 的双指针
    // 拆分为前 N 个节点翻转 + reverseKGroup 剩余的节点
    let left = head;
    let right = head;
    let i = 0;
    while(i < k && right !== null) {
        right = right.next;
        i++;
    }
    // 不够 k 个，不需要处理直接返回 head 即可
    if (i !== k) {
        return head;
    }
    // 够 k 个，那么等于前面的翻转然后连接上后面的
    let prev = null;
    while(left !== right) {
        let next = left.next;
        left.next = prev;
        prev = left;
        left = next;
    }
    head.next = reverseKGroup(right, k);
    return prev;
};
