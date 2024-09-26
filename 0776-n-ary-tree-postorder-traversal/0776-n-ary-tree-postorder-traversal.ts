/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
    if (root === null) {
        return [];
    }
    // 1. 遍历
    // let result = [];
    // const walk = (root: _Node | null) => {
    //     if (root === null) {
    //         return;
    //     }
    //     if (root.children) {
    //         for (let i = 0; i < root.children.length; i++) {
    //             walk(root.children[i]);
    //         }
    //     }
    //     result.push(root.val);
    // }
    // walk(root);
    // return result;

    // 2. 分解
    let result = [];
    if (root.children) {
        for (let i = 0; i < root.children.length; i++) {
            result.push(...postorder(root.children[i]));
        }
    }
    result.push(root.val);
    return result;

};