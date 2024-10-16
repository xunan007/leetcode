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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    // 找不到，直接为空
    if (root === null) {
        return null;
    }
    // 最终运作的逻辑
    if (key === root.val) {
        // 1. 是叶子节点，直接删除
        if (root.left === null && root.right === null) {
            return null;
        }
        // 2. 只有左孩子或者右孩子
        if (root.left === null) {
            return root.right;
        }
        if (root.right === null) {
            return root.left;
        }
        // 3. 同时有左孩子和右孩子，把左孩子挪到右孩子最左边的节点
        let node = root.right;
        while (node) {
            if (node.left) {
                node = node.left;
            } else {
                node.left = root.left;
                return root.right;
            }
        }
    }
    // 二分判断
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    return root;
};