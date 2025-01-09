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

function rob(root: TreeNode | null): number {
    // 用一个map来记录每个节点的dp数组
    let mp: Map<TreeNode, number[]> = new Map();
    // dp[0]表示不偷当前节点的最大值，dp[1]表示偷当前节点的最大值
    const walk = (node: TreeNode | null): null => {
        if (node === null) {
            return;
        }
        walk(node.left);
        walk(node.right);
        // 后序
        let dp: number[] = new Array(2).fill(0);
        let left: number[] = mp.get(node.left) || [];
        let right: number[] = mp.get(node.right) || [];
        // 不偷
        dp[0] = Math.max(left[0] ?? 0, left[1] ?? 0) + Math.max(right[0] ?? 0, right[1] ?? 0);
        // 偷
        dp[1] = node.val + (left[0] ?? 0) + (right[0] ?? 0);
        mp.set(node, dp);
    };
    walk(root);
    let dp = mp.get(root);
    return Math.max(...dp);
};