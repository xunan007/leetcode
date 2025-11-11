function findAnagrams(s: string, p: string): number[] {
    // 这道题的核心在于如何判断当前的子串是异位词
    // 这里用的是消除的逻辑，初始化用 p 放到记录表里面个数是正数，用 s 里面对应数量的子串去消除 p
    // 匹配到就消除（直接减），消除到消除的个数为 0 就成功
    // 匹配不到也是消除（这个时候记录表是负的），消除个数反而会增加
    const dictionary = new Array(26).fill(0);
    const pos = 'a'.charCodeAt(0);
    const result = [];
    let remove = 0;
    for (let i = 0; i < p.length; i++) {
        dictionary[p[i].charCodeAt(0) - pos]++;
        remove++;
    }
    let left = 0;
    let right = 0;
    while (right < s.length) {
        if (right - left + 1 <= p.length) {
            const idx = s[right].charCodeAt(0) - pos;
            dictionary[idx]--;
            if (dictionary[idx] >= 0) { // 注意这里的>=0，考虑到 aa 的情况
                // 刚好被消除掉
                remove--;
            } else {
                remove++;
            }
            if (remove === 0) {
                result.push(left);
            }
            right++;
            continue;
        }
        // 还原消除
        // 两种情况：一种本来需要被消除掉的，结果没消除，这种+；本来不需要被消除的，还原了要-
        dictionary[s[left].charCodeAt(0) - pos]++;
        if (dictionary[s[left].charCodeAt(0) - pos] <= 0) {
            remove--;
        } else {
            remove++;
        }
        left++;
        // 消除
        dictionary[s[right].charCodeAt(0) - pos]--;
        if (dictionary[s[right].charCodeAt(0) - pos] >= 0) { 
            remove--;
        } else {
            remove++;
        }
        if (remove === 0) {
            result.push(left);
        }
        right++;
    }
    return result;
};
