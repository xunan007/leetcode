function solveNQueens(n: number): string[][] {
    // 实际上就是全排列+剪纸
    const result = [];
    const path = [];

    const isValid = (path: number[], i: number): boolean => {
        const index = path.length;
        for (let j = 0; j < path.length; j++) {
            // 剪枝函数核心公式
            if (Math.abs(i - path[j]) === index - j) {
                return false;
            }
        }
        return true;
    }

    const dfs = () => {
        if (path.length === n) {
            const arr = [];
            for (let i = 0; i < path.length; i++) {
                const _arr = new Array(n).fill('.');
                _arr[path[i]] = 'Q';
                arr.push(_arr.join(''));
            }
            result.push(arr);
            return;
        }
        for (let i = 0; i < n; i++) {
            // 剪枝--对角线
            if (path.indexOf(i) === -1 && isValid(path, i)) {
                path.push(i);
                dfs();
                path.pop();
            }
        }
    };
    dfs();

    return result;
};
