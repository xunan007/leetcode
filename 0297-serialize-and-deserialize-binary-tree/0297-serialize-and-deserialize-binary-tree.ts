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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    
    let s: string = '';
    const fn = (root: TreeNode | null) => {
        if (root === null) {
            s += 'null,'
            return;
        }
        // 前序遍历的操作
        s += `${root.val},`;
        fn(root.left);
        fn(root.right);
    }

    fn(root);

    return s.slice(0, s.length - 1);
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    let list = data.split(',');

    const fn = (list: string[]): TreeNode | null => {
        const val = list.shift();

        if (val === 'null') {
            return null;
        }

        const root = new TreeNode(Number(val));
        root.left = fn(list);
        root.right = fn(list);

        return root;
    }

    return fn(list);
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */