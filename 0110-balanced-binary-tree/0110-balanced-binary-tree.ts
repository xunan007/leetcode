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

function isBalanced(root: TreeNode | null): boolean {
    // // 1. 分解问题
    // // 当前节点是平衡二叉树 => 左右子节点都是平衡二叉树且左右子树高度绝对值小于1
    // if (root === null) {
    //     return true;
    // }
    // const left = isBalanced(root.left);
    // const right = isBalanced(root.right);

    // const getLH = getHeight(root.left);
    // const getRH = getHeight(root.right);

    // // 但是这里会有两个嵌套，有没有优化的方法
    // return left && right && Math.abs(getLH - getRH) <= 1;

    // 2. 分解问题
    // 有一个函数，既要判断它本身是平衡树，又要返回它本身的高度
    if (root === null) {
        return true;
    }
    return getHeight(root) > 0;
};

function getHeight(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    const left = getHeight(root.left);
    const right = getHeight(root.right);
    // 如果正常的话就返回高度，不正常直接就 -1
    const level = Math.abs(left - right);
    if (left === -1 || right === -1 || level > 1) {
        return -1;
    }
    return Math.max(left, right) + 1;
}

// function getHeight(root: TreeNode | null): number {
//     if (root === null) {
//         return 0;
//     }
//     return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
// }