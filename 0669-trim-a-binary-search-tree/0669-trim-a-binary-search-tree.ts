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

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    if (root === null) {
        return null;
    }

    // 非区间内，注意这里有陷阱
    // 右边的可能比 low 的大
    if (root.val < low) {
        root = trimBST(root.right, low, high);
        return root;
    }
    // 左边的可能比 high 小
    if (root.val > high) {
        root = trimBST(root.left, low, high);
        return root;
    }

    //  区间内，当前保留，子节点继续修剪
    if (root.val >= low && root.val <= high) {
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);
    }

    return root;
};