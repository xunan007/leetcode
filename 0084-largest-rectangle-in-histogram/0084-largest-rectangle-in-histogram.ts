function largestRectangleArea(heights: number[]): number {
    // 本质上就是每日温度两个方向数组的叠加计算，看灵茶山的解释就可以了
    const len = heights.length;
    let stack: number[] = [];
    // 找左边第一个比它小的
    let left = new Array(len).fill(-1);
    for (let i = 0; i < len; i++) {
        while (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack[stack.length - 1] !== undefined) {
            left[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    stack = [];
    // 找右边第一个比它小的
    let right = new Array(len).fill(-1);
    for (let i = len - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack[stack.length - 1] !== undefined) {
            right[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    let max = -Infinity;
    // 计算体积
    for (let i = 0; i < len; i++) {
        let l = left[i] === -1 ? 0 : left[i] + 1;
        let r = right[i] === -1 ? len - 1 : right[i] - 1;
        max = Math.max(max, (r - l + 1) * heights[i]);
    }

    return max;
};