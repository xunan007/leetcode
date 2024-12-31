function partitionLabels(s: string): number[] {
    // 本质还是合并区间
    // 1. 先算出字母最后出现的位置
    const hash: { [key: string]: number } = {};
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = i;
    }
    // 2. 算出来以后，该字母最远的区间就有了，那么接下来就是合并区间
    // 注：这里不需要排序，i就是left，right就是i的最右
    let result: number[] = [];
    // left没用到，直接注释掉就行了
    let left = 0;
    let right = hash[s[0]];
    for (let i = 1; i < s.length; i++) {
        if (i <= right) {
            right = Math.max(right, hash[s[i]]);
        } else {
            result.push(right - left + 1);
            left = i;
            right = hash[s[i]];
        }
    }
    result.push(right - left + 1);
    return result;
};