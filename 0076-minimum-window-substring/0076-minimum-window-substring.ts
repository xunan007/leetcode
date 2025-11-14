function minWindow(s: string, t: string): string {
    // 难点在于窗口如何进行窗口的动态伸缩
    // 右边不断增大，直到覆盖所有字符
    // 覆盖完后，左边不断减少，直到损失一个字符，然后继续右边不断扩大
    let result: string = '';
    let mp: Map<string, number> = new Map();
    let find: number = t.length; // 为0和为负都没关系
    // 还是要用消除的思路来做
    for (let i = 0; i < t.length; i++) {
        mp.set(t[i], mp.has(t[i]) ? mp.get(t[i]) + 1 : 1);
    }
    let left = 0;
    let right = 0;
    for (let right = 0; right < s.length; right++) {
        const g = mp.get(s[right]);
        if (g !== undefined) {
            mp.set(s[right], g - 1);
            if (g - 1 >= 0) {
                find--;
            }
        }
        while (find <= 0) {
            if (result.length === 0 || result.length > right - left + 1) {
                result = s.slice(left, right + 1);
            }
            const g = mp.get(s[left]);
            if (g !== undefined) {
                mp.set(s[left], g + 1);
                if (g + 1 > 0) {
                    find++;
                }
            }
            left++;
        }
    };
    return result;
}
