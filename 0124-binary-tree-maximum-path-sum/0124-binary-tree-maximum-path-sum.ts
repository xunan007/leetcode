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

function maxPathSum(root: TreeNode | null): number {
    // 一个节点所在路径的最大值，就是左边最大值+右边最大值+本身、左边最大值+本身、右边最大值+本身、本身这4者的最大值
    // 返回给上一层的时候，是取单边的最大值
    if (root === null) {
        return 0;
    }
    let max = -Infinity;
    const getMaxSum = (root: TreeNode): number => {
        // 根节点了
        if (root === null) {
            return 0;
        }
        let l = getMaxSum(root.left);
        let r = getMaxSum(root.right);
        let val = Math.max(root.val, root.val + l, root.val + r);
        max = Math.max(val, root.val + l + r, max);
        return val;
    }
    getMaxSum(root);
    return max;
};