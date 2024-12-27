function partition(s: string): string[][] {
    // 判断是否是回文串
    const isPalindrome = (s: string): boolean => {
        // TODO:可以用动态规划来优化
        let l = 0;
        let r = s.length - 1;
        while (l <= r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    // 裁剪的时候也可以认为是一个树的结构
    let result: string[][] = [];
    let path: string[] = [];

    const backtracking = (startIdx: number) => {
        if (startIdx === s.length) {
            result.push(path.slice());
            return;
        }
        for (let i = startIdx; i < s.length; i++) {
            let str = s.slice(startIdx, i + 1);
            if (isPalindrome(str)) {
                path.push(str);
                backtracking(i + 1);
                path.pop();
            }
        }
    }

    backtracking(0);
    return result;
};