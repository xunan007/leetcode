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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // 1. 遍历 - 分别遍历两棵树拿到前序序列
    // 2. 分解问题
    // => 两棵树要相同，首先所在的节点相同，其次左子树要相同，其次右子树要相同
    if (p === null && q === null) {
        return true;
    }
    if (p === null && q !== null) {
        return false;
    }
    if (p !== null && q === null) {
        return false;
    }

    let isSame = p.val === q.val;
    let leftSame = isSameTree(p.left, q.left);
    let rightSame = isSameTree(p.right, q.right);

    return isSame && leftSame && rightSame;
};