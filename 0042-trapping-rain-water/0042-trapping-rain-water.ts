function trap(height: number[]): number {
    // // 核心：当前位置的储水量是由左右两个最大的柱子决定的，即左右两个最大柱子中较小的那个高度减掉当前位置的高度
    // // 这里是竖着计算的
    // let left = 0;
    // let right = height.length - 1;
    // let lh = height[left];
    // let rh = height[right];
    // let result = 0;
    // // 双指针开始工作
    // while (left < right) {
    //     if (lh < rh) {
    //         result += lh-height[left];
    //         left++;
    //         lh = Math.max(lh, height[left]);
    //     } else {
    //         result += rh - height[right];
    //         right--;
    //         rh = Math.max(rh, height[right]);
    //     }
    // }
    // return result;

    // 这道题也可以用单调栈来做，横着计算，算到的时候相当于把那一层的空缺给填了，往后就是按层去填充
    // 1. 高度入栈，这是个单调递增的栈，直到遇见一个比栈顶大的高度
    // 2. 开始计算面积，先取出栈顶元素，这个元素是当前地基的层高；此时的栈顶元素，和当前遍历到的元素，共同构成一个坑
    // 3. 继续计算，如果此时的栈顶元素比当前遍历的元素大，说明地基高了，填不了，重复1的动作
    // 4. 反之，再取出栈顶元素，这个栈顶元素是新的地基的层高（前面的可以认为已经填平了）；如果此时还有栈顶元素说明又构成一个新的坑，如果此时栈顶元素没有了，说明构成不了坑了，当前元素入栈后重复1的过程

    const len = height.length;
    let result = 0;
    let stack = new Array();
    for (let i = 0; i < len; i++) {
        while (stack.length > 0 && height[i] >= height[stack[stack.length - 1]]) {
            // 把平台的高度找出来
            let pH = height[stack.pop()];
            // 算面积，宽是左右的差，高是左右柱子最小的那个减去本身平台的高度
            if (stack[stack.length - 1] !== undefined) {
                let h = Math.min(height[i], height[stack[stack.length - 1]]) - pH;
                result += h * (i - stack[stack.length - 1] - 1);
            }
        }
        stack.push(i);
    }
    return result;
};
