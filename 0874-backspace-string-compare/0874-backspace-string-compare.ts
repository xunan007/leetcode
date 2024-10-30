function backspaceCompare(s: string, t: string): boolean {
    // 解法一：原地修改string后进行裁剪比较
    // 解法二：从尾到头比较
    let i = s.length - 1;
    let j = t.length - 1;

    let sSkip = 0;
    let tSkip = 0;

    while (i >= 0 || j >= 0) {
        while(i >= 0) {
            if (s[i] === '#') {
                sSkip++;
                i--;
            } else if (sSkip > 0) {
                sSkip--;
                i--;
            } else {
                break;
            }
        }

        while(j >= 0) {
            if (t[j] === '#') {
                tSkip++;
                j--;
            } else if (tSkip > 0) {
                tSkip--;
                j--;
            } else {
                break;
            }
        }

        // 有效位的比较
        if (s[i] !== t[j]) {
            return false;
        }
        i--;
        j--;
    }

    return true;

};