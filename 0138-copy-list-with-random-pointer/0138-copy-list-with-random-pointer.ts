/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    let mp: Map<_Node, _Node> = new Map();
    let p = head;
    // 先复制到哈希表
    while(p) {
        let node = new _Node(p.val);
        mp.set(p, node);
        p = p.next;
    }
    // 根据旧的构建新的
    let dummy = new _Node();
    p = dummy;
    while(head) {
        p.next = mp.get(head);
        p = p.next;

        if (head.random) {
            p.random = mp.get(head.random);
        }
        head = head.next;
    }

    return dummy.next;

};