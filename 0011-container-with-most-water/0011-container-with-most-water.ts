function maxArea(height: number[]): number {
    // 先记住结论，这里主要是去证明想取最大值，总是移动小的那个边界
    // 多路指针
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    while (left < right) {
        result = Math.max((right - left) * Math.min(height[left], height[right]), result);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;

};