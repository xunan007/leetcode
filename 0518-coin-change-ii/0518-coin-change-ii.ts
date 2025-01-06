function change(amount: number, coins: number[]): number {
    let dp: number[] = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= coins.length; i++) {
        // 注意这里的遍历顺序，不是从尾到头遍历
        // 因为原始的状态转移方程是dp[i][j]=dp[i-1][j]+dp[i][j-coins[i]]
        // 这里dp[i][j]不仅依赖于上一层的数据，还依赖于同一层前面的数据，所以要保证数据是新更新到的，得用正序
        for (let j = 1; j <= amount; j++) {
            if (j - coins[i - 1] >= 0) {
                dp[j] = dp[j] + dp[j - coins[i - 1]]
            }
        }
    }
    return dp[amount];
};