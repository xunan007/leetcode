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

function levelOrder(root: TreeNode | null): number[][] {
    // 1. 用队列迭代的方式
    // let result = [];
    // if (root === null) {
    //     return result;
    // }
    // let queue = [root];
    // while (queue.length > 0) {
    //     const len = queue.length;
    //     const curQueue = [];
    //     for (let i = 0; i < len; i++) {
    //         const node = queue.shift();
    //         curQueue.push(node.val);
    //         if (node.left) {
    //             queue.push(node.left);
    //         }
    //         if (node.right) {
    //             queue.push(node.right);
    //         }
    //     }
    //     result.push(curQueue);
    // }
    // return result;

    // 2. 递归
    // a. 使用前序遍历去进行递归
    // b. 用一个 depth 的变量识别层数，然后每一层存到对应 index 位的数组里面去
    let result = [];
    let depth = -1;
    const walk = (root: TreeNode) => {
        if (root === null) {
            return;
        }
        // 这里的 depth++ 和 depth-- 是核心
        depth++;
        if (!result[depth]) {
            result[depth] = [root.val];
        } else {
            result[depth].push(root.val);
        }
        walk(root.left);
        walk(root.right);
        depth--;
    }
    walk(root);
    return result;
};