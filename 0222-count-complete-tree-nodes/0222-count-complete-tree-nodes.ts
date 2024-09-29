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

function countNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    let leftDepth = 1;
    let rightDepth = 1;

    // 这段代码其实就是对递归的优化
    let left = root.left;
    let right = root.right;
    while (left) {
        leftDepth++;
        left = left.left;
    }
    while (right) {
        rightDepth++;
        right = right.right;
    }

    // 直接满二叉树
    if (leftDepth === rightDepth) {
        return Math.pow(2, leftDepth) - 1;
    }

    return countNodes(root.left) + countNodes(root.right) + 1;
};