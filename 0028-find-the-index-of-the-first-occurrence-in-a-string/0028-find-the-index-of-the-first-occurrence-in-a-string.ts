function strStr(haystack: string, needle: string): number {
    const getNext = (needle: string): number[] => {
        let next = [0];
        let i = 1;
        let j = 0;
        for (; i < needle.length; i++) {
            while (j > 0 && needle[i] !== needle[j]) {
                j = next[j - 1];
            }
            if (needle[i] === needle[j]) {
                j++;
            }
            next[i] = j;
        }
        return next;
    }
    // 先拿到 next 数组
    let next = getNext(needle);
    let i = 0;
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1];
        }
        if (haystack[i] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i + 1 - needle.length;
        }
    }
    return -1;
};