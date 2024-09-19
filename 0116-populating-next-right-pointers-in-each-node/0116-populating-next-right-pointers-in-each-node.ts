/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
    if (root == null) {
        return null;
    }

    // 因为一个节点解决不了问题，所以要用两个节点
    next(root.left, root.right);


    return root;
};

function next(node1: _Node, node2: _Node) {
    if (node1 === null) {
        return;
    }

    node1.next = node2;
    next(node1.left, node1.right);
    next(node2.left, node2.right);

    next(node1.right, node2.left);
}