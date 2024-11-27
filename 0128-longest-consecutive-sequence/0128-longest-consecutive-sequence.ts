function longestConsecutive(nums: number[]): number {
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