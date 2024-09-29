/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 * 
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */


function maxDepth(root: _Node | null): number {
    // 一样有三种解法，这里只写两种
    // 1. 前序遍历
    // if (root === null) {
    //     return 0;
    // }
    // let depth = 0;
    // let maxDepth = 0;
    // const walk = (root: _Node | null) => {
    //     depth++;
    //     // 这里跟左右子树稍微有点不一样，判空的逻辑有点出入
    //     if (root.children.length === 0) {
    //         maxDepth = Math.max(depth, maxDepth);
    //     }
    //     for (let i = 0; i < root.children.length; i++) {
    //         walk(root.children[i]);
    //     }
    //     depth--;
    // }
    // walk(root);
    // return maxDepth;
    // 2. 递归分解问题
    if (root === null) {
        return 0;
    }
    let maxDepthArr = [];
    for (let i = 0; i < root.children.length; i++) {
        maxDepthArr.push(maxDepth(root.children[i]));
    }
    return maxDepthArr.length === 0 ? 1 : Math.max(...maxDepthArr) + 1;
};