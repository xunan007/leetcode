function maxProfit(prices: number[]): number {
    let prevNoHold = 0; // 为了合法，只能这么来
    let hold = -Infinity;
    let noHold = 0;
    for (let i = 1; i <= prices.length; i++) {
        let tmp = noHold;
        noHold = Math.max(noHold, hold + prices[i - 1]);
        hold = Math.max(hold, prevNoHold - prices[i - 1]);
        prevNoHold = tmp;
    }
    return noHold;
};