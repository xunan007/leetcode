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

function preorderTraversal(root: TreeNode | null): number[] {
    // 1. 遍历
    let result = [];
    const walk = (root: TreeNode) => {
        if (root === null) {
            return;
        }

        result.push(root.val);
        walk(root.left);
        walk(root.right);
    }
    walk(root);
    return result;
    // 2. 分解问题
};