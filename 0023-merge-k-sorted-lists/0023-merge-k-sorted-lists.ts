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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let p: ListNode = null;
    let min = Infinity;
    let index = -1;
    lists.forEach((node, i) => {
        if (node) {
            min = Math.min(min, node.val);
            if (min === node.val) {
                index = i;
            }
        }
    });
    if (index === -1) {
        return p;
    }

    p = new ListNode(min);
    lists[index] = lists[index].next;
    p.next = mergeKLists(lists);

    return p;
};