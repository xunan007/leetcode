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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // // 1. 遍历 - 前序
    // if (root === null || (root === null && targetSum === 0)) {
    //     return false;
    // }

    // let path = [];

    // const walk = (root: TreeNode): boolean => {
    //     if (root === null) {
    //         return false;
    //     }
        
    //     path.push(root.val);
    //     // 判断是否到底了
    //     if(!root.left && !root.right && path.reduce((a, b) => a + b) === targetSum) {
    //         return true;
    //     }

    //     let check = false;
    //     check = walk(root.left);
    //     if (check) {
    //         return true;
    //     }

    //     check = walk(root.right);
    //     if (check) {
    //         return true;
    //     }
        
    //     path.pop();
        
    //     return check;
    // }

    // return walk(root);

    // 2. 分解问题
    if (root === null || (root === null && targetSum === 0)) {
        return false;
    }

    if (!root.left && !root.right) {
        return root.val === targetSum;
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};