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

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }
    const isMirror = (a: TreeNode | null, b: TreeNode | null): boolean => {
        if (!a && !b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        return a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left);
    }
    return isMirror(root.left, root.right);
};