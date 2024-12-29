function solveNQueens(n: number): string[][] {
    let result: string[][] = [];
    let path: number[] = [];
    const backtracking = (y: number) => {
        if (y === n) {
            let r: string[] = [];
            path.forEach((item) => {
                let arr: string[] = new Array(n).fill('.');
                arr[item] = 'Q';
                r.push(arr.join(''));
            });
            result.push(r);
            return;
        }
        for (let i = 0; i < n; i++) {
            // 检查以下前面的是否有同个x，45度和135度是否有元素
            let pass = true;
            for (let j = y - 1, l = i - 1, r = i + 1; j >= 0; j--, l--, r++) {
                if (path[j] === i) {
                    pass = false;
                    break;
                }
                if (path[j] === l || path[j] === r) {
                    pass = false;
                    break
                }
            }
            if (!pass) {
                continue;
            }
            path.push(i);
            backtracking(y + 1);
            path.pop();
        }
    }
    backtracking(0);
    return result;
};