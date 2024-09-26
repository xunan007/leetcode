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

function minDepth(root: TreeNode | null): number {
    // 和最大深度一样有三种解法
    // // 1. 分解
    // if (root === null) {
    //     return 0;
    // }

    // const left = minDepth(root.left);
    // const right = minDepth(root.right);

    // // 这里要稍微处理一下，和 0 比要返回大的，因为本来就没有叶子节点了
    // let min = Math.min(left, right);
    // if (left === 0) {
    //     min = right;
    // }
    // if (right === 0) {
    //     min = left;
    // }

    // return min + 1;

    // 2. 遍历 - 前序遍历找到所有的叶子节点计算层数
    let depth = 0;
    let minDepth = 0;
    if (root === null) {
        return 0;
    }
    const walk = (root: TreeNode) => {
        if (root === null) {
            return;
        }
        depth++;
        // 叶子节点就记录下层数
        if (!root.left && !root.right) {
            if (minDepth === 0) {
                minDepth = depth;
            } else {
                minDepth = Math.min(minDepth, depth);
            }
        }
        walk(root.left);
        walk(root.right);
        depth--;
    }

    walk(root);
    return minDepth;

    // 3. 遍历 - 层序遍历，横扫找到最近一层的叶子节点
    // let depth = 0;
    // if (root === null) {
    //     return 0;
    // }
    // let queue = [root];
    // while(queue.length > 0) {
    //     let find = false;
    //     const len = queue.length;
    //     depth++;
    //     for (let i=0;i<len;i++) {
    //         const node = queue.shift();
    //         if (!node.left && !node.right) {
    //             // 找到第一个叶子节点
    //             return depth;
    //         }
    //         if (node.left) {
    //             queue.push(node.left);
    //         }
    //         if (node.right) {
    //             queue.push(node.right);
    //         }
    //     }
    // }
    // return depth;
};