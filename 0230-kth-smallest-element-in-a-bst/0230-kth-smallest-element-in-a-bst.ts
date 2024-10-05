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

function kthSmallest(root: TreeNode | null, k: number): number {
    if (root === null) {
        return;
    }
    let index = 0;
    let n = 0;
    const walk = (root: TreeNode | null) => {
        if (root === null) {
            return;
        }
        walk(root.left);
        index++;
        if (index === k) {
            n = root.val;
        }
        walk(root.right);
    }
    walk(root);
    return n;
};