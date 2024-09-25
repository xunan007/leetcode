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

function largestValues(root: TreeNode | null): number[] {
    let result = [];
    if (root === null) {
        return result;
    }
    let queue = [root];
    while (queue.length > 0) {
        const len = queue.length;
        let current = [];
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            current.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(Math.max(...current));
    }
    return result;
};