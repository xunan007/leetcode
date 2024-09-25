/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
    // 1. 遍历 -> 递归的方式
    // 对根节点的判空
    // if (root == null) {
    //     return null;
    // }

    // // 这个是递归结束的位置
    // if (root.left === null) {
    //     return root;
    // }

    // //  前序操作，根节点需要做两件事情
    // root.left.next = root.right;
    // root.right.next = root.next?.left;
    // // 还是前序遍历的框架
    // connect(root.left);
    // connect(root.right);

    // return root;

    // 2. 遍历 -> 迭代的方式
    if (root === null) {
        return null;
    }

    let queue = [root];
    while (queue.length > 0) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            if (queue[0] && i !== len - 1) {
                node.next = queue[0];
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return root;
};