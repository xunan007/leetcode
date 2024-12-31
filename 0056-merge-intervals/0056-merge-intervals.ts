function merge(intervals: number[][]): number[][] {
    // 1. 先根据左端点排序好
    intervals.sort((a, b) => a[0] - b[0]);
    // 2. 开始合并区间
    // 假定区间是[1,3]
    let result: number[][] = [];
    let left = intervals[0][0];
    let right = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= right) {
            // 区间扩大
            right = Math.max(intervals[i][1], right);
        } else {
            // 区间结束
            result.push([left, right]);
            left = intervals[i][0];
            right = intervals[i][1];
        }
    }
    result.push([left, right]);
    return result;
};