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

function pathSum(root: TreeNode | null, targetSum: number): number {
    // 核心就是前序遍历+前缀和
    // 代码讲解看：https://leetcode.cn/problems/path-sum-iii/solutions/596361/dui-qian-zhui-he-jie-fa-de-yi-dian-jie-s-dey6/?envType=study-plan-v2&envId=top-100-liked
    const mp = new Map();
    let ans = 0;
    let result = 0;
    // 这个很重要，如果出现全路径，没有这个东西会导致统计不到
    mp.set(0, 1);
    const dfs = (root: TreeNode | null): number => {
        if (root === null) {
            return;
        }
        ans += root.val;
        // 注意下面两行代码的顺序
        result += mp.has(ans - targetSum) ? mp.get(ans - targetSum) : 0;
        mp.set(ans, mp.has(ans) ? mp.get(ans) + 1 : 1);
        dfs(root.left);
        dfs(root.right);
        // 退出的时候要恢复，保证前缀和的路径方向必须是向下的
        // 后序恢复现场
        mp.set(ans, mp.get(ans) - 1);
        ans -= root.val;
    }
    dfs(root);
    return result;
};