/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */


function levelOrder(root: _Node | null): number[][] {
    let result = [];
    if (root === null) {
        return result;
    }
    const queue = [root];
    while (queue.length > 0) {
        const len = queue.length;
        let current = [];
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            current.push(node.val);
            queue.push(...node.children);
        }
        result.push(current);
    }
    return result;
};