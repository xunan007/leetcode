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

function kthSmallest(root: TreeNode | null, k: number): number {
    if (root === null) {
        return;
    }
    let index = 0;
    // 使用 return 优化一下性能
    // 如果节点有 size，那么 topk 搜索就变成了 logN 的复杂度了
    const walk = (root: TreeNode | null): number | boolean => {
        if (root === null) {
            return false;
        }

        const val = walk(root.left);
        if (val !== false) {
            return val;
        }

        index++;
        if (index === k) {
            return root.val;
        }

        const val1 = walk(root.right);
        if (val1 !== false) {
            return val1;
        }

        return false;
    }

    return <number>walk(root);
};