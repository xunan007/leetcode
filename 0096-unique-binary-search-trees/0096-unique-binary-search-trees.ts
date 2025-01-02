function numTrees(n: number): number {
    let dp: number[] = [];
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        // 开始做选择
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            sum += dp[j - 1] * dp[i - j];
        }
        dp[i] = sum;
    }
    return dp[n];
};