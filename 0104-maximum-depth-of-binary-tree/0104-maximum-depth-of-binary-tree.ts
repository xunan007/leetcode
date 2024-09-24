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

function maxDepth(root: TreeNode | null): number {
    // 1. 遍历树得出结果（这个解法非常之奇妙）
    // let depth = 0;
    // let max = 0;
    // const walk = (root: TreeNode | null) => {
    //     if (root === null) {
    //         // 到这里说明到底了
    //         max = Math.max(depth, max);
    //         return;
    //     }
    //     // 遍历进来的时候做记录
    //     depth++;
    //     walk(root.left);
    //     walk(root.right);
    //     // 遍历走的时候去掉记录，这里就能实现回到上一层遍历别的节点时这个值能动态变化
    //     depth--;
    // }

    // walk(root);

    // return max;

    // 2. 分解问题
    if (root === null) {
        return 0;
    }

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    // 这里要明确为什么是在后序来处理
    return Math.max(left, right) + 1;
};