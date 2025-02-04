function solveNQueens(n: number): string[][] {
    let result: string[][] = [];
    let path: number[] = [];
    let onPath: boolean[] = new Array(false);
    const isValid = (i: number): boolean => {
        // 第一行肯定是返回 true
        if (path.length === 0) {
            return true;
        }
        // 第二行开始要考虑对角线
        let l = i - 1;
        let r = i + 1;
        for (let j = path.length - 1; j >= 0; j--) {
            if (path[j] === l || path[j] === r) {
                return false;
            }
            l--;
            r++;
        }
        return true;
    }
    const dfs = (): void => {
        if (path.length === n) {
            let _result: string[] = [];
            for (let i = 0; i < path.length; i++) {
                let arr: string[] = new Array(n).fill('.');
                arr[path[i]] = 'Q';
                _result.push(arr.join(''));
            }
            result.push(_result);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (onPath[i]) {
                continue;
            }
            if (!isValid(i)) {
                continue;
            }
            onPath[i] = true;
            path.push(i);

            dfs();

            onPath[i] = false;
            path.pop();
        }
    };

    dfs();
    return result;
};