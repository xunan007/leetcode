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

function inorderTraversal(root: TreeNode | null): number[] {
    // 1. 遍历
    let result = [];
    if (root === null) {
        return result;
    }
    const walk = (root: TreeNode | null): void => {
        if (root === null) {
            return;
        }
        walk(root.left);
        result.push(root.val);
        walk(root.right);
    }
    walk(root);
    return result;
    // 2. 分解问题
};