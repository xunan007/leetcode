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

function binaryTreePaths(root: TreeNode | null): string[] {
    // // 1. 遍历
    // let result = [];
    // let queue = [];
    // const walk = (root: TreeNode) => {
    //     if (root === null) {
    //         return;
    //     }
    //     queue.push(root.val);
    //     if (!root.left && !root.right) {
    //         result.push(queue.join('->'));
    //     }
    //     walk(root.left);
    //     walk(root.right);
    //     queue.pop();
    // }
    // walk(root);
    // return result;

    // 2. 分解问题
    if (root === null) {
        return [];
    }
    if (!root.left && !root.right) {
        return [`${root.val}`];
    }
    const left = binaryTreePaths(root.left);
    const right = binaryTreePaths(root.right);
    let result = [];
    let current = [...left, ...right];
    for (let i = 0; i < current.length; i++) {
        result.push(root.val + '->' + current[i]);
    }
    return result;

};