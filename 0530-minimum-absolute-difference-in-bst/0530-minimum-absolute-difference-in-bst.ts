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

function getMinimumDifference(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    let min = Infinity;
    let p = null;
    const walk = (root: TreeNode | null) => {
        if (root === null) {
            return;
        }
        walk(root.left);
        if (p) {
            min = Math.min(min, Math.abs(root.val - p.val));
        }
        p = root;
        walk(root.right);
    }
    walk(root);
    return min;
};