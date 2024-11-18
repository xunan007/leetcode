function findAnagrams(s: string, p: string): number[] {
    let result = [];
    let record = new Array(26).fill(0);
    let pos = 'a'.charCodeAt(0);
    let less = 0;
    // 先记录好数据
    for (let i = 0; i < p.length; i++) {
        const index = p[i].charCodeAt(0) - pos;
        if (record[index] === 0) {
            less++;
        }
        record[index]++;
    }
    // 开始用窗口去扫描
    const winLen = p.length;
    for (let start = 0, end = 0; end < s.length; end++) {
        if (end - start < winLen) {
            console.log(start, end);
            const index = s[end].charCodeAt(0) - pos;
            record[index]--;
            if (record[index] === 0) {
                less--;
            }
            if (less === 0) {
                console.log('---do', start);
                result.push(start);
            }
            continue;
        }
        // 控制好窗口的长度
        const oStartIdx = s[start].charCodeAt(0) - pos;
        record[oStartIdx]++;
        if (record[oStartIdx] === 1) {
            less++;
        }
        const endIdx = s[end].charCodeAt(0) - pos;
        record[endIdx]--;
        if (record[endIdx] === 0) {
            less--;
        }
        start++;
        if (less === 0) {
            result.push(start);
        }
    }
    return result;
};
// rophenylhydrazine