function integerBreak(n: number): number {
    let dp: number[] = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        let max = 0;
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            // 还有另外一种写法，只要保证至少拆分成两个数就行
            let a = Math.max(j, dp[j]);
            let b = Math.max(i - j, dp[i - j]);
            max = Math.max(a * b, max);
        }
        dp[i] = max;
    }
    return dp[n];
};