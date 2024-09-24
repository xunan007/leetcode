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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    let maxDiameter = 0;

    const maxDepth = (root: TreeNode | null): number => {
        if (root === null) {
            return 0;
        }
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        // 这道题关键是转换成：当前节点的最大直径等于左右子树最大层数之和
        const diameter = left + right;
        maxDiameter = Math.max(diameter, maxDiameter);
        
        return Math.max(left, right) + 1;
    }

    maxDepth(root);

    return maxDiameter;
};