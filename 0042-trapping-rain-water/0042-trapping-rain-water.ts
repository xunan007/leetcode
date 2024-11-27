function trap(height: number[]): number {
    // 核心：当前位置的储水量是由左右柱子最小的那个决定的，即最小那个柱子的高度减掉当前位置的高度；左右柱子的高度取的是最高的那个
    let left = 0;
    let right = height.length - 1;
    let lh = height[left];
    let rh = height[right];
    let result = 0;
    // 双指针开始工作
    while (left < right) {
        if (lh < rh) {
            result += lh-height[left];
            left++;
            lh = Math.max(lh, height[left]);
        } else {
            result += rh - height[right];
            right--;
            rh = Math.max(rh, height[right]);
        }
    }
    return result;
};