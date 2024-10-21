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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (root === null) {
        return null;
    }
    // 1. 遍历解决
    const walk = (root: TreeNode | null): TreeNode | null => {
        if (root === null) {
            return null;
        }
        const a = walk(root.left);
        const b = walk(root.right);

        // 左右都有记录，那么肯定是有结果
        if (a && b) {
            return root;
        }
        // 一边有结果，直接向上返回
        if (a || b) {
            if (root.val === p.val || root.val === q.val) {
                return root;
            }
            if (a) {
                return a;
            }
            if (b) {
                return b;
            }
        }
        // 左右都没记录，那就找
        if (root.val === p.val || root.val === q.val) {
            return root;
        }
        // 都没有，那就返回 null
        return null;
    }
    return walk(root);
    // 2. 分解问题

};