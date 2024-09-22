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

/**
 Do not return anything, modify root in-place instead.
 */
// 注意不要用全局变量！！执行的时候变量不会重置
function flatten(root: TreeNode | null): void {
    // const queue = [];
    // 非递归写法，先前序遍历储存然后重建
    // function traverse(root: TreeNode) {
    //     if (root === null) {
    //         return;
    //     }
    //     queue.push(root);
    //     traverse(root.left);
    //     traverse(root.right);
    // }
    // traverse(root);
    // while(queue.length > 0) {
    //     const p = queue.shift();
    //     p.left = null;
    //     if (queue[0]) {
    //         p.right = queue[0];
    //     }
    // }

    // 递归写法，后序遍历的变种 左右中->右左中
    if (root === null) {
        return;
    }
    let p = null;

    function walk(root) {
        if (root === null) {
            return;
        }
        walk(root.right);
        walk(root.left);

        root.right = p;
        root.left = null;
        p = root;
    }

    walk(root);
};