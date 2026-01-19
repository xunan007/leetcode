function partitionLabels(s: string): number[] {
    // 参考：https://leetcode.cn/problems/partition-labels/solutions/455814/shou-hua-tu-jie-hua-fen-zi-mu-qu-jian-ji-lu-zui-yu/?envType=study-plan-v2&envId=top-100-liked
    let dictionary = {};
    for (let i = 0; i < s.length; i++) {
        dictionary[s[i]] = i;
    }
    let result = [];
    let maxPos = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        maxPos = Math.max(maxPos, dictionary[s[i]]);
        if (maxPos === i) {
            result.push(i - start + 1);
            start = i + 1;
        }
    }
    return result;
};