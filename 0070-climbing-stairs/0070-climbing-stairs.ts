function climbStairs(n: number): number {
    // 要爬上三楼，这里有两种选择，爬1/2
    // 所以可以是从1楼爬2层到3楼，也可以是从2楼爬1层到3楼，那么到三楼就是爬上1楼的方法+爬上2楼的方法
    // 以此类推...
    let dp: number[] = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};