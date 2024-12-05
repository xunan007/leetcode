function trap(height: number[]): number {
    // // 核心：当前位置的储水量是由左右柱子最小的那个决定的，即最小那个柱子的高度减掉当前位置的高度；左右柱子的高度取的是最高的那个
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

    // 这道题也可以用单调栈来做，横着计算
    // 1. 高度入栈，这是个单调递增的栈，直到遇见一个比栈顶大的高度
    // 2. 开始计算面积，事实上就是找到当前这个元素与

    const len = height.length;
    let result = 0;
    let stack = new Array();
    for (let i = 0; i < len; i++) {
        while (stack.length > 0 && height[i] >= height[stack[stack.length - 1]]) {
            // 把平台的高度找出来
            let pH = height[stack.pop()];
            if (stack[stack.length - 1] !== undefined) {

                let h = Math.min(height[i], height[stack[stack.length - 1]]) - pH;
                result += h * (i - stack[stack.length - 1] - 1);
            }
        }
        stack.push(i);
    }
    return result;
};