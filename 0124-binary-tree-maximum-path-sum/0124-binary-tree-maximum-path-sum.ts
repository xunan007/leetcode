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
    // 当前的最大路径和等于左边的最大路径和+右边的最大路径和
    let ans = -Infinity;
    const maxSum = (root: TreeNode | null): number => {
        if (root === null) {
            return 0;
        }
        let left = maxSum(root.left);
        left = left > 0 ? left : 0;
        let right = maxSum(root.right);
        right = right > 0 ? right : 0;
        const result = left + root.val + right;
        ans = Math.max(ans, result);
        // 但是 return 出去只能选一条边，不然就会出错
        return left < right ? root.val + right : root.val + left;
    }
    maxSum(root);
    return ans;
};
