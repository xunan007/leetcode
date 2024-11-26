function repeatedSubstringPattern(s: string): boolean {
    // 1. 移动匹配法
    // let ss = s + s;
    // ss = ss.slice(1, ss.length - 1);
    // return ss.indexOf(s) > -1;
    // 2. KMP
    // 先拿到 next 数组
    const getNext = (s: string): number[] => {
        let next = [0];
        let i = 1;
        let j = 0;
        for (; i < s.length; i++) {
            while (j > 0 && s[i] !== s[j]) {
                j = next[j - 1];
            }
            if (s[i] === s[j]) {
                j++;
            }
            next[i] = j;
        }
        return next;
    }
    const next = getNext(s);
    if (next[s.length - 1] !== 0 && s.length % (s.length - next[s.length - 1]) === 0) {
        return true;
    }
    return false;
};