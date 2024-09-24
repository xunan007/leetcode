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

function postorderTraversal(root: TreeNode | null): number[] {
    // 1. 遍历
    // let result = [];
    // const walk = (root: TreeNode | null) => {
    //     if (root === null) {
    //         return;
    //     }

    //     walk(root.left);
    //     walk(root.right);
    //     result.push(root.val);
    // }

    // walk(root);
    // return result;

    // 2. 递归
    let result = [];

    if (root === null) {
        return [];
    }

    result.push(...postorderTraversal(root.left));
    result.push(...postorderTraversal(root.right));
    result.push(root.val);

    return result;
};