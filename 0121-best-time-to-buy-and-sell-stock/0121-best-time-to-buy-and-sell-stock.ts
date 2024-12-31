function maxProfit(prices: number[]): number {
    let result = 0;
    let minP = prices[0];
    for (let i = 0; i < prices.length; i++) {
        minP = Math.min(prices[i], minP);
        result = Math.max(result, prices[i] - minP);
    }
    return result;
};