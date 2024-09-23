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
    let s = '';

    // 1. 前序遍历的方式
    // const fn = (root: TreeNode | null) => {
    //     if (root === null) {
    //         s += 'null,'
    //         return;
    //     }
    //     // 前序遍历的操作
    //     s += `${root.val},`;
    //     fn(root.left);
    //     fn(root.right);
    // }

    // fn(root);

    // return s.slice(0, s.length - 1);

    // 2. 层序遍历的方式
    if (root === null) {
        return 'null';
    }
    
    let arr = [];
    arr.push(root);
    while(arr.length > 0) {
        const node = arr.shift();
        if (node === null) {
            s += 'null,';
            continue;
        }
        arr.push(node.left);
        arr.push(node.right);
        s += `${node.val},`;
    }

    return s.slice(0, s.length - 1);
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    let list = data.split(',');

    // 1. 前序遍历的方式
    // const fn = (list: string[]): TreeNode | null => {
    //     const val = list.shift();

    //     if (val === 'null') {
    //         return null;
    //     }

    //     const root = new TreeNode(Number(val));
    //     root.left = fn(list);
    //     root.right = fn(list);

    //     return root;
    // }

    // return fn(list);

    // 2. 层序遍历的方式
    const val = list[0];
    if (val === 'null') {
        return null;
    }
    const root = new TreeNode(Number(val));
    let queue = [root];
    // 这里的巧妙之处就在于通过 index 偏移去记录叶子节点的起始位置
    let index = 1;
    while(queue.length > 0) {
        const node = queue.shift();
        if (list[index] !== 'null') {
            const left = new TreeNode(Number(list[index]));
            node.left = left;
            queue.push(left);
        }
        index++;
        if (list[index] !== 'null') {
            const right = new TreeNode(Number(list[index]));
            node.right = right;
            queue.push(right);
        }
        index++;
    }
    return root;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */