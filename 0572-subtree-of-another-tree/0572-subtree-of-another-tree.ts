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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root === null) {
        return false;
    }
    if (subRoot === null) {
        return true;
    }
    // 1. 用层序遍历做遍历
    // let queue = [root];
    // while(queue.length > 0) {
    //     const node = queue.shift();
    //     let result = compare(node, subRoot);
    //     if (result) {
    //         return true;
    //     }
    //     if (node.left) {
    //         queue.push(node.left);
    //     }
    //     if (node.right) {
    //         queue.push(node.right);
    //     }
    // }
    // return false;

    // 2. 用递归做遍历 => 要做到和 while 一样，必须要能够遇到即中断返回
    const dfs = (root: TreeNode): boolean => {
        if (root === null) {
            return false;
        }
        let current = compare(root, subRoot);
        if (current) {
            return true;
        }

        let left = dfs(root.left);
        if (left) {
            return true;
        }

        let right = dfs(root.right);
        if (right) {
            return true;
        }

        return false;
        // return current || left || right;
    }

    return dfs(root);
};

function compare(node: TreeNode | null, subNode: TreeNode | null): boolean {
    if (node === null && subNode === null) {
        return true;
    }
    if (node !== null && subNode === null) {
        return false;
    }
    if (node === null && subNode !== null) {
        return false;
    }
    const isSame = node.val === subNode.val;
    if (!isSame) {
        return false;
    }
    const left = compare(node.left, subNode.left);
    const right = compare(node.right, subNode.right);
    return left && right;

}