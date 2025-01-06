function change(amount: number, coins: number[]): number {
    let dp: number[] = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j - coins[i - 1] >= 0) {
                dp[j] = dp[j] + dp[j - coins[i - 1]]
            }
        }
    }
    return dp[amount];
};