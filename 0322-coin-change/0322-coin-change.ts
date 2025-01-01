function coinChange(coins: number[], amount: number): number {
    let dp: number[] = [];
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        let min = Infinity;
        for (let j = 0; j < coins.length; j++) {
            let coin = coins[j];
            // 状态转移，注意有前提条件
            if (i - coin >= 0 && dp[i - coin] !== -1) {
                min = Math.min(min, dp[i - coin] + 1);
            }
        }
        dp[i] = min === Infinity ? -1 : min;
    }
    return dp[amount];
};