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

function next(left: _Node, right: _Node) {
    if (left === null) {
        return;
    }

    left.next = right;
    next(left.left, left.right);
    next(right.left, right.right);
    
    next(left.right, right.left);
}