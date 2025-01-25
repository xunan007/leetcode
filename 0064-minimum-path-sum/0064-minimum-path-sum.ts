function minPathSum(grid: number[][]): number {
    let dp: number[][] = [];
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
        let arr = new Array(n).fill(0);
        dp.push(arr);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[0][0];
            } else {
                dp[i][j] = Math.min(j === 0 ? Infinity : dp[i][j - 1], i === 0 ? Infinity : dp[i - 1][j]) + grid[i][j];
            }
        }
    }
    return dp[m - 1][n - 1];
};