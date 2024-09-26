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


function preorder(root: _Node | null): number[] {
    if (root === null) {
        return [];
    }
    // 1. 遍历
    // let result = [];
    // const walk = (root: _Node | null) => {
    //     if (root === null) {
    //         return;
    //     }
    //     result.push(root.val);
    //     if (root.children) {
    //         for (let i = 0; i < root.children.length; i++) {
    //             const node = root.children[i];
    //             walk(node);
    //         }
    //     }
    // }
    // walk(root);
    // return result;
    // 2. 分解问题

    let result = [];
    result.push(root.val);
    if (root.children) {
        for (let i = 0; i < root.children.length; i++) {
            result.push(...preorder(root.children[i]));
        }
    }
    return result;
};