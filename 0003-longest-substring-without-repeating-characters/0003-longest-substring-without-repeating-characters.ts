function lengthOfLongestSubstring(s: string): number {
    let record: Map<string, number> = new Map();
    let left = 0;
    let right = 0;
    let result = 0;
    // 记录有多少个字符重复
    let less = 0;
    for (; right < s.length; right++) {
        if (!record.has(s[right])) {
            record.set(s[right], 1);
            result = Math.max(right - left + 1, result);
        } else {
            record.set(s[right], record.get(s[right]) + 1);
            less++;
            while (less > 0) {
                let val = record.get(s[left]);
                if (val === 1) {
                    record.delete(s[left]);
                } else {
                    record.set(s[left], val-1);
                    if (val === 2) {
                        less--;
                    }
                }
                left++;
            }
        }
    }
    return result;
};