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

function findBottomLeftValue(root: TreeNode | null): number {
    // 1. 遍历 - 层序遍历
    // if (root === null) {
    //     return 0;
    // }
    // let queue = [root];
    // let leftVal = 0;
    // while (queue.length > 0) {
    //     const len = queue.length;
    //     for (let i = 0; i < len; i++) {
    //         const node = queue.shift();
    //         if (i === 0) {
    //             leftVal = node.val;
    //         }
    //         if (node.left) {
    //             queue.push(node.left);
    //         }
    //         if (node.right) {
    //             queue.push(node.right);
    //         }
    //     }
    // }
    // return leftVal;
    // 2. 遍历 - 前序遍历
    let depth = 0;
    let currentVal = 0;
    let leftVal = 0;
    let maxDepth = 0;
    const walk = (root: TreeNode | null) => {
        if (root === null) {
            if (depth > maxDepth) {
                maxDepth = depth;
                leftVal = currentVal;
            }
            return;
        }
        depth++;
        currentVal = root.val;
        walk(root.left);
        walk(root.right);
        depth--;
    }
    walk(root);
    return leftVal;
};