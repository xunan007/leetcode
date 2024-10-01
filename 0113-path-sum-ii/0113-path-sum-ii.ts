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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    if (root === null || (root === null && targetSum === 0)) {
        return [];
    }
    // // 1. 遍历
    // let result = [];
    // let current = [];

    // const walk = (root: TreeNode) => {
    //     if (root === null) {
    //         return;
    //     }

    //     current.push(root.val);
    //     if (!root.left && !root.right && current.reduce((a, b) => a + b) === targetSum) {
    //         // 二维数组记得拷贝
    //         result.push(current.slice(0));
    //     }

    //     walk(root.left);

    //     walk(root.right);
    //     current.pop();
    // }

    // walk(root);
    // return result;

    // 2. 分解问题
    if (!root.left && !root.right) {
        if (root.val === targetSum) {
            return [[root.val]];
        }
    }

    const left = pathSum(root.left, targetSum - root.val);
    const right = pathSum(root.right, targetSum - root.val);
    let result = [];
    if (left.length > 0) {
        left.forEach((item) => {
            item.unshift(root.val);
            result.push(item);
        });
    }
    if (right.length > 0) {
        right.forEach((item) => {
            item.unshift(root.val);
            result.push(item);
        });
    }
    return result;
};