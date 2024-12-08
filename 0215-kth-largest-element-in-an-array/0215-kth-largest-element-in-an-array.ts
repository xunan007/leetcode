function findKthLargest(nums: number[], k: number): number {
    // 这里要O(n)，那么只有桶排序才能满足要求
    // 基数排序、计数排序和桶排序都满足这个要求，只不过划分桶的逻辑不太一样
    // 桶排序严格意义上来讲已经不是排序算法了，更像是一种哈希归类
    // 这里直接用计数排序就行了，这里有点哈希表的味道，其实就是空间换时间
    const pos = Math.pow(10, 4);
    const record = new Array(pos * 2 + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        record[nums[i] + pos]++;
    }
    for (let i = record.length - 1; i >= 0; i--) {
        if (record[i] >= k) {
            return i - pos;
        } else {
            k = k - record[i];
        }
    }
    return;
};