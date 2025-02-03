function restoreIpAddresses(s: string): string[] {
    let result: string[] = [];
    let path: string[] = [];
    const isLegal = (str: string): boolean => {
        if (str === '0') {
            return true;
        }
        if (str[0] === '0') {
            return false;
        }
        if (Number(str) > 255) {
            return false;
        }
        return true;
    }
    const dfs = (i: number): void => {
        // 最后一个位置特殊
        if (path.length === 3) {
            let sec = s.slice(i);
            // 溢出
            if (!isLegal(sec)) {
                return;
            }
            // 满足条件要求就进入
            path.push(sec);
            result.push(path.join('.'));
            path.pop()
            return;
        }
        for (let j = i; j < s.length && s.length - j >= 4 - path.length; j++) {
            let sec = s.slice(i, j + 1);
            if (!isLegal(sec)) {
                continue;
            }
            path.push(sec);
            dfs(j + 1);
            path.pop();
        }
    };
    dfs(0);
    return result;
};