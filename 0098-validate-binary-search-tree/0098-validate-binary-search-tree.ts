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

function isValidBST(root: TreeNode | null): boolean {
    // 1. 遍历 - 抓住中序遍历的有序性
    if (root === null) {
        return false;
    }
    let queue = [];
    const walk = (root: TreeNode | null) => {
        if (root === null) {
            return;
        }
        walk(root.left);
        queue.push(root.val);
        walk(root.right);
    }
    walk(root);
    for (let i = 0; i < queue.length - 1; i++) {
        const a = queue[i];
        const b = queue[i + 1];
        if (b - a <= 0) {
            return false;
        }
    }
    return true;
};