function maxProfit(prices: number[]): number {
    let noHold = 0;
    let hold = -Infinity;
    for (let i = 1; i <= prices.length; i++) {
        noHold = Math.max(noHold, hold + prices[i - 1]);
        hold = Math.max(hold, noHold - prices[i - 1]);
    }
    return noHold;
};