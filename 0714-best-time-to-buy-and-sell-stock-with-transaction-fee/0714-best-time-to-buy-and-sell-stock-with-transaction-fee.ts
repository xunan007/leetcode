function maxProfit(prices: number[], fee: number): number {
    let hold = -Infinity;
    let noHold = 0;
    for (let i = 1; i <= prices.length; i++) {
        noHold = Math.max(noHold, hold + prices[i - 1]);
        hold = Math.max(hold, noHold - prices[i - 1] - fee);
    }
    return noHold;
};