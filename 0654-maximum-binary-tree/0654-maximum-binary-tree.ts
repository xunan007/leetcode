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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
        return null;
    }

    const max = Math.max(...nums);
    const index = nums.indexOf(max);
    const left = nums.slice(0, index);
    const right = nums.slice(index + 1);

    const node = new TreeNode(max);
    node.left = constructMaximumBinaryTree(left);
    node.right = constructMaximumBinaryTree(right);

    return node;
};