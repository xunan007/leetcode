/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    // 用 Set 来去重
    const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const row: Set<string>[] = Array.from({ length: 9 }, () => new Set(options)); // 行
    const col: Set<string>[] = Array.from({ length: 9 }, () => new Set(options)); // 列
    const block: Set<string>[] = Array.from({ length: 9 }, () => new Set(options)); // 块

    // 预处理
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const item = board[i][j];
            const blockIdx = Math.floor(j / 3) + Math.floor(i / 3) * 3;
            if (item !== '.') {
                row[i].delete(item);
                col[j].delete(item);
                block[blockIdx].delete(item);
            }
        }
    }

    const dfs = (i: number, j: number): boolean => {
        if (i === 9) {
            return true;
        }

        // 不为空格，要记录一下 Set
        const item = board[i][j];
        const blockIdx = Math.floor(j / 3) + Math.floor(i / 3) * 3;
        if (item !== '.') {
            return dfs(j + 1 === 9 ? i + 1 : i, (j + 1) % 9);
        } else {
            // 为空格的时候就要开始填了
            for (let k = 1; k <= 9; k++) {
                let s = String(k);
                if (
                    row[i].has(s)
                    && col[j].has(s)
                    && block[blockIdx].has(s)
                ) {
                    row[i].delete(s);
                    col[j].delete(s);
                    block[blockIdx].delete(s);
                    board[i][j] = s;
                    // 注意这里有一个中断
                    if (dfs(j + 1 === 9 ? i + 1 : i, (j + 1) % 9)) {
                        return true;
                    }
                    row[i].add(s);
                    col[j].add(s);
                    block[blockIdx].add(s);
                    board[i][j] = '.';
                }
            }
        }
    };

    dfs(0, 0);
    return;
};
