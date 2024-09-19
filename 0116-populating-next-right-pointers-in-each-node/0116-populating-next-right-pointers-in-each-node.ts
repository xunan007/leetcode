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
    if (root == null) {
        return null;
    }

    // 因为一个节点解决不了问题，所以要用两个节点
    // 分析：
    // 1. 根节点要做的事情是连接左右两个字节点，但是发现存在跨父节点，明显一个节点解决不了问题
    // 2. 所以，那就要用到两个节点来解决问题了，说明需要两个参数，所以另起一个递归函数来处理
    // 3. 接下来就要考虑函数的功能：把相邻的两个节点连接起来
    // 4. 这里已经不依托于二叉树的遍历了

    next(root.left, root.right);


    return root;
};

function next(node1: _Node, node2: _Node) {
    if (node1 === null) {
        return;
    }

    node1.next = node2;
    next(node1.left, node1.right);
    next(node1.right, node2.left);
    next(node2.left, node2.right);
}