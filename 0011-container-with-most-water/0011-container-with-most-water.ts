function maxArea(height: number[]): number {
    // 先记住结论，这里主要是去证明想取最大值，总是移动小的那个边界
    // 多路指针

    // 难点在于答案是两个变量控制的，没有办法控制单一变量
    // 这里的核心思想是排除法
    // 最开始用头和尾去算结果，如果收缩的时候要比这个大，那么只有更短的边变长才可能更大
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
