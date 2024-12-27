function restoreIpAddresses(s: string): string[] {
    // 还是切割问题
    // 多了一步条件的判断
    const isLegal = (s: string): boolean => {
        if (s[0] === '0' && s.length > 1) {
            return false;
        }
        if (Number(s) > 255) {
            return false;
        }
        return true;
    }
    let path: string[] = [];
    let result: string[] = [];
    const backtracking = (startIdx: number) => {
        if (path.length === 4) {
            result.push(path.join('.'));
            return;
        }
        for (let i = startIdx; i < s.length; i++) {
            if (path.length !== 3) {
                let str = s.slice(startIdx, i + 1);
                if (!isLegal(str)) {
                    return;
                }
                path.push(str);
                backtracking(i + 1);
                path.pop();
            } else {
                let str = s.slice(startIdx);
                if (!isLegal(str)) {
                    return;
                }
                path.push(str);
                backtracking(i + 1);
                path.pop();
                return;
            }
        }
    }

    backtracking(0);
    return result;
};