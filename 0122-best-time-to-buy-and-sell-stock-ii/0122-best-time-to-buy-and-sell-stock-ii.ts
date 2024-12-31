function maxProfit(prices: number[]): number {
    let sum = 0;
    for (let i = 1; i < prices.length; i++) {
        let val = prices[i] - prices[i-1];
        if (val > 0) {
            sum += val;
        }
    }
    return sum;
};