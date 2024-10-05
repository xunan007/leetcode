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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const mp = new Map<string, TreeNode>();
    const st = new Set<TreeNode>();

    const walk = (root: TreeNode | null): string => {
        if (root === null) {
            return 'null,';
        }
        let left = walk(root.left);
        let right = walk(root.right);

        const k = `${root.val},${left}${right}`;
        const v = mp.get(k);
        if (!v) {
            mp.set(k, root);
        } else {
            // 注意这里有陷阱，不能是add root，否则set就无法去重了，因为虽然是重复节点但是指针不是同一个
            st.add(v);
        }

        return k;
    }

    walk(root);


    return [...st.values()];
};