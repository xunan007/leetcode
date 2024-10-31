function minWindow(s: string, t: string): string {
    // 这道题用滑动窗口来解题，但是难点在于如何优化每一次判断子串是否满足要求
    // 这里可以通过引入一个 less 变量做条件判断的转换

    let ori = new Array(128).fill(0);
    let less = 0;
    let maxLen = Infinity;
    let sl, sr = 0;

    for (let i = 0; i < t.length; i++) {
        const idx = t[i].codePointAt(0);
        if (ori[idx] === 0) {
            less++;
        }
        ori[idx]++;
    }

    let start = 0;
    let end = 0;
    for (;end < s.length; end++) {
        let c = s[end].codePointAt(0);
        ori[c]--;
        if (ori[c] === 0) {
            less--;
        }

        while(less === 0) {
            if (end - start + 1 < maxLen) {
                sl = start;
                sr = end;
                maxLen = end - start + 1;
            }
            
            let c = s[start].codePointAt(0);
            if (ori[c] === 0) {
                less++;
            }
            ori[c]++;
            start++;
        }
    }

    return maxLen < Infinity ? s.slice(sl, sr+1) : '';

};