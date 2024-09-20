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

    if (root.left === null) {
        return root;
    }
    
    root.left.next = root.right;
    root.right.next = root.next?.left;
    // 还是前序遍历的框架
    connect(root.left);
    connect(root.right);

    return root;
};