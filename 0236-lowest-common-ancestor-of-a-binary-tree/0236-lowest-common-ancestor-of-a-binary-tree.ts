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
        // 找的位置在这里写，是因为如果找到相等，这个节点要么就是父节点，要么就是自身，子树不需要再去处理了，因为这两个节点默认是都在的
        if (root === null || root === p || root === q) {
            return root;
        }
        const a = walk(root.left);
        const b = walk(root.right);

        // 左右都有记录，那么肯定是有结果
        if (a && b) {
            return root;
        }
        // 一边有结果，直接向上返回
        if (a || b) {
            // 这段代码不需要了
            // if (root.val === p.val || root.val === q.val) {
            //     return root;
            // }
            if (a) {
                return a;
            }
            if (b) {
                return b;
            }
        }
        // 找的逻辑不用在后序这里写
        // if (root.val === p.val || root.val === q.val) {
        //     return root;
        // }
        // 都没有，那就返回 null
        return null;
    }
    return walk(root);
    // // 2. 分解问题
    // let l = lowestCommonAncestor(root.left, p, q);
    // let r = lowestCommonAncestor(root.right, p, q);

    // if (l && r) {
    //     return root;
    // }

    // if (l || r) {
    //     if (root.val === p.val || root.val === q.val) {
    //         return root;
    //     }
    //     if (l) {
    //         return l;
    //     }
    //     if (r) {
    //         return r;
    //     }
    // }

    // if (root.val === p.val || root.val === q.val) {
    //     return root;
    // }

    // return null;
};