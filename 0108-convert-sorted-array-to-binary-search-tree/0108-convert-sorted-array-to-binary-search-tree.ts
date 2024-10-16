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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
        return null;
    }
    const len = nums.length;
    // 这里向上取整和向下取整都可以
    const index = Math.floor(len / 2);
    const mid = nums[index];

    const root = new TreeNode(mid);
    root.left = sortedArrayToBST(nums.slice(0, index));
    root.right = sortedArrayToBST(nums.slice(index + 1));

    return root;
};