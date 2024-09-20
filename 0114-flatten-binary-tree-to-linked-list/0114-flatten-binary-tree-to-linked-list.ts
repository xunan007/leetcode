/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */

const queue = [];

function flatten(root: TreeNode | null): void {
    // 非递归写法，先前序遍历储存然后重建
    traverse(root);
    while(queue.length > 0) {
        const p = queue.shift();
        p.left = null;
        if (queue[0]) {
            p.right = queue[0];
        }
    }
};

function traverse(root: TreeNode) {
    if (root === null) {
        return;
    }
    queue.push(root);
    traverse(root.left);
    traverse(root.right);
}