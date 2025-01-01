function uniquePaths(m: number, n: number): number {
    let y = m;
    let x = n;
    let dp: number[][] = [];
    for (let i = 0; i < y; i++) {
        dp.push(new Array(x).fill(0));
    }
    dp[0][0] = 1;
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            // 遍历的起始顺序要跳过0,0
            if (i === 0 && j === 0) {
                continue;
            }
            // 状态转移方程
            let a = 0;
            if (j - 1 >= 0) {
                a = dp[i][j - 1];
            }
            let b = 0;
            if (i - 1 >= 0) {
                b = dp[i - 1][j];
            }
            dp[i][j] = a + b;
        }
    }
    return dp[y - 1][x - 1];
};