function fib(n: number): number {
    // 1. dp[i]表示第i个数的fib
    let dp = [0, 1];
    // 2. 确定递推公式
    // dp[i] = dp[i - 1] + dp[i - 2];
    // 3. 需要初始化dp[1]和dp[0]
    // 4. 遍历从小到大，从2开始
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};