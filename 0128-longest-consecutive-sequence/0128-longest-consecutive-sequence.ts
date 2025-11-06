function longestConsecutive(nums: number[]): number {
    // 用 Set 去重，然后找到以每个数字开始的最长连续序列
    // 连续序列的特性，前后一定是+1-1，以此来找到开头的那个，如果是离散的单个，那len只会是1
    let record: Set<number> = new Set();
    nums.forEach((item) => {
        record.add(item);
    });
    let maxLen = 0;
    record.forEach((item) => {
        let len = 1;
        let ip = item + 1;
        let im = item - 1;
        // 不是开头，跳过
        if (record.has(im)) {
            return;
        }
        while(record.has(ip)) {
            len++;
            ip++;
        }
        maxLen = Math.max(maxLen, len);
    });
    return maxLen;
};
