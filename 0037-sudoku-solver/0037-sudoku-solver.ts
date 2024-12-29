/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    const len = board.length;
    const isValid = (i: number, j: number, k: string): boolean => {
        // 遍历这一行/列有没有重复的
        for (let m = 0; m < len; m++) {
            if (board[i][m] === k) {
                return false;
            }
            if (board[m][j] === k) {
                return false;
            }
        }
        // 遍历这个小的3x3有没有重复的
        let x = 3 * Math.floor(i / 3);
        let y = 3 * Math.floor(j / 3);
        for (let m = 0; m < 3; m++) {
            for (let n = 0; n < 3; n++) {
                if (board[x + n][y + m] === k) {
                    return false;
                }
            }
        }
        return true;
    }
    const backtracking = (): boolean => {
        // 每一个格都需要判断、填充
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (board[i][j] !== '.') {
                    continue;
                }
                // 找到需要填充的格，从1到9开始试
                for (let k = 1; k <= 9; k++) {
                    if (isValid(i, j, String(k))) {
                        board[i][j] = String(k);
                        // 如果有效，进行下一个格子填充
                        // 理想的情况下可以填充到最后一个格子返回 true，然后上层的所有函数就全部从这里开始 return 了
                        if (backtracking()) {
                            return true;
                        }
                        board[i][j] = '.';
                    }
                }
                // 填充到一个位置的时候发现不符合就要返回 false，那么从这一层开始这一条链路就全部回溯失败了
                return false;
            }
        }
        return true;
    };
    backtracking();
};