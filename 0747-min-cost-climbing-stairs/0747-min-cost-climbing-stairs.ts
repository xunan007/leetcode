function minCostClimbingStairs(cost: number[]): number {
    let dp: number[] = [];
    // 读题很重要，决定了初始值
    dp[0] = 0;
    dp[1] = 0;
    // 楼顶的层数
    let roof = cost.length;
    for (let i = 2; i <= roof; i++) {
        let min = Infinity;
        // 状态转移方程
        for (let level of [1, 2]) {
            min = Math.min(dp[i - level] + cost[i - level], min);
        }
        dp[i] = min;
    }
    return dp[roof];
};