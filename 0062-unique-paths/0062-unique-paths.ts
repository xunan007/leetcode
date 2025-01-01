function uniquePaths(m: number, n: number): number {
    let y = m;
    let x = n;
    let dp: number[][] = [];
    for (let i = 0; i < y; i++) {
        dp.push(new Array(x).fill(0));
    }
    dp[0][0] = 1;
    // 可以有个优化，直接把第一行和第一列全部填充
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let i = 1; i < y; i++) {
        for (let j = 1; j < x; j++) {
            // 状态转移方程
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }
    return dp[y - 1][x - 1];
};