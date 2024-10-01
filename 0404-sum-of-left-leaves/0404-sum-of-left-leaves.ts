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

function sumOfLeftLeaves(root: TreeNode | null): number {
    // let sum = 0;
    // if (root == null || (!root.left && !root.right)) {
    //     return sum;
    // }
    // // 1. 遍历 - 层序遍历
    // let queue = [root];
    // while (queue.length > 0) {
    //     const len = queue.length;
    //     for (let i = 0; i < len; i++) {
    //         const node = queue.shift();
    //         const left = node.left;
    //         const right = node.right;
    //         if (left) {
    //             queue.push(left);
    //             if (!left.left && !left.right) {
    //                 sum += left.val
    //             }
    //         }
    //         if (right) {
    //             queue.push(right);
    //         }
    //     }
    // }
    // return sum;

    // // 2. 遍历 - 前序遍历
    // const walk = (root: TreeNode | null) => {
    //     if (root === null) {
    //         return;
    //     }
    //     const left = root.left;
    //     if (left && !left.left && !left.right) {
    //         sum += left.val;
    //     }
    //     walk(root.left);
    //     walk(root.right);
    // }
    // walk(root);
    // return sum;

    // 2. 分解问题 - 递归
    if (root === null) {
        return 0;
    }

    let leftSum = sumOfLeftLeaves(root.left);
    // 中序要加操作，如果不加处理的话，整个函数是一直在空转的
    if (root.left && !root.left.left && !root.left.right) {
        // 原始的左节点是空的
        leftSum = root.left.val;
    }
    const rightSum = sumOfLeftLeaves(root.right);
    return leftSum + rightSum;

};