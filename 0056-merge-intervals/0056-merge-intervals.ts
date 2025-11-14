function merge(intervals: number[][]): number[][] {
    // https://leetcode.cn/problems/merge-intervals/solutions/487031/shou-hua-tu-jie-56he-bing-qu-jian-by-xiao_ben_zhu
    // 题解看这个图就可以了
    // 先按照左端点排序
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        // 要比较的总是已经确定的区间的最后那个数
        const item = result[result.length - 1];
        if (item[1] < intervals[i][0]) {
            // 排排坐
            result.push(intervals[i]);
        } else {
            // 有交叉了
            if (item[1] < intervals[i][1]) {
                item[1] = intervals[i][1]
            }
        }
    }
    return result;
};
