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
    // // 这道题的核心在于：这个函数本身如何去定义，它的语义并不是返回 LCA，而是以 root 为根返回包含 p/q/最近公共祖先
    // // 那么问题就可以被分解了，既然我找的是 root 为根的，那么就可以拆分成去找左子树和找右子树

    // // 找到什么时候结束呢？为空或者找到 p 或者 q 就没有必要继续往下找了
    // if (root === null || root === p || root === q) {
    //     return root;
    // }

    // let left = lowestCommonAncestor(root.left, p, q);
    // let right = lowestCommonAncestor(root.right, p, q);
    // // 找 root 的相关性节点，那么也可以被分解为找左右子树的相关性节点
    // // 这里就有好几种情况了
    // // 1. left 和 right 都能找到，那么这种情况必然是 p 和 q 分散在两个子树，这个时候就返回 root 即可
    // if (left && right) {
    //     return root;
    // }
    // // 2. left 和 right 都找不到，那么就是没有
    // if (!left && !right) {
    //     return null;
    // }
    // // 3. left 有 right 没有、left 没有 right 有
    // // 这两个可以直接合并
    // if ((left && !right) || (!left && right)) {
    //     return left ? left : right;
    // }
};
