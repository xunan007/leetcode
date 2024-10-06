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

function findMode(root: TreeNode | null): number[] {
    // 遍历解决
    if (root === null) {
        return [];
    }

    let result = [];
    let count = 1;
    let maxCount = 1;
    let p = null;

    const walk = (root: TreeNode | null) => {
        if (root === null) {
            return;
        }
        walk(root.left);
        // 比较
        if (!p) {
            result.push(root.val);
        } else {
            if (p.val === root.val) {
                count++;
                if (count > maxCount) {
                    // 注意这里大的时候，要把数组重置
                    result = [];
                    result.push(root.val);
                    maxCount = count;
                } else if (count === maxCount) {
                    result.push(root.val);
                }
            } else {
                count = 1;
                if (maxCount === 1) {
                    result.push(root.val);
                }
            }
        }
        p = root;
        walk(root.right);
    }

    walk(root);
    return result;
};