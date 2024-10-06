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

function isValidBST(root: TreeNode | null): boolean {
    // 1. 遍历 - 抓住中序遍历的有序性
    // if (root === null) {
    //     return true;
    // }
    // let queue = [];
    // const walk = (root: TreeNode | null) => {
    //     if (root === null) {
    //         return;
    //     }
    //     walk(root.left);
    //     queue.push(root.val);
    //     walk(root.right);
    // }
    // walk(root);
    // for (let i = 0; i < queue.length - 1; i++) {
    //     const a = queue[i];
    //     const b = queue[i + 1];
    //     if (b - a <= 0) {
    //         return false;
    //     }
    // }
    // return true;

    // 2. 分解
    if (root === null) {
        return true;
    }
    // 这里参数改掉了，所以需要重新起一个 function
    return compare(root, -Infinity, Infinity);
};

function compare(root: TreeNode | null, min: number, max: number): boolean {
    if (root === null) {
        return true;
    }
    // 特别注意这里的区别，转换成了区间问题
    if (root.val <= min || root.val >= max) {
        return false;
    }
    // 分解问题
    return compare(root.left, min, root.val) && compare(root.right, root.val, max);
}