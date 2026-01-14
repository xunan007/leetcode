function maxProfit(prices: number[]): number {
    // dp[i][j] 表示在i天，持有或不持有股票的最大收益
    let dp = [];
    for (let i = 0; i < prices.length; i++) {
        dp.push(new Array(2).fill(0));
    }
    dp[0][0] = 0; // 0-不持有
    dp[0][1] = -prices[0]; // 1-持有
    for (let i = 1; i < prices.length; i++) {
        // 今天不持有=昨天持有+今天卖||昨天也不持有
        // 今天持有=昨天持有||昨天没有持有(因为这里只能买卖一次，所以不能有前面的累积，只能是0)+今天买
        // 第二个式子，如果前面是dp[i-1][0]-prices[i]，就变成多次买卖了
        dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
        dp[i][1] = Math.max(-prices[i], dp[i - 1][1]);
    }
    // 最后不持有利润肯定是最大的
    return dp[prices.length - 1][0];
};
