function maxProfit(k: number, prices: number[]): number {
    // let dp: number[][][] = [];
    // // 第一维度是天数
    // for (let i = 0; i <= prices.length; i++) {
    //     let a: number[][] = new Array();
    //     // 第二维度是交易次数
    //     for (let j = 0; j <= k; j++) {
    //         // 第三维度是是否持有股票，index=0表示不持有，index=1表示持有
    //         // 缺省值，不要填默认值
    //         let b = new Array(2);
    //         a.push(b);
    //     }
    //     dp.push(a);
    // }
    // // dp[i][j][k]表示前i天最多买卖j次持有或不持有的最大收益是多少
    // // 初始化
    // // i=0，不持有，利润是0，持有，不可能，-Infinity表示
    // // j=0，不持有，利润是0，持有，不可能，-Infinity表示
    // let arr = dp[0];
    // for (let j = 0; j <= k; j++) {
    //     arr[j][0] = 0;
    //     arr[j][1] = -Infinity;
    // }
    // for (let i = 0; i <= prices.length; i++) {
    //     dp[i][0][0] = 0;
    //     dp[i][0][1] = -Infinity;
    // }
    // for (let i = 1; i <= prices.length; i++) {
    //     for (let j = 1; j <= k; j++) {
    //         dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i - 1]);
    //         dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i - 1]);
    //     }
    // }
    // return dp[prices.length][k][0];
    // 空间优化：三维降二维，去掉i
    // let dp: number[][] = [];
    // for (let j = 0; j <= k; j++) {
    //     // i=0的初始化
    //     // j=0的初始化刚好包括在i=0的初始化里面了
    //     let a = [0, -Infinity];
    //     dp.push(a);
    // }
    // // 这里要逆序
    // for (let i = 1; i <= prices.length; i++) {
    //     for (let j = k; j >= 1; j--) {
    //         dp[j][0] = Math.max(dp[j][0], dp[j][1] + prices[i - 1]);
    //         dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - prices[i - 1]);
    //     }
    // }
    // return dp[k][0];
    // 二维降一维度，拆成持有与不持有两个数组
    let dp: number[] = [];
    let dpHold: number[] = [];
    for (let j = 0; j <= k; j++) {
        // i=0的初始化
        // j=0的初始化刚好包括在i=0的初始化里面了
        dp.push(0);
        dpHold.push(-Infinity);
    }
    // 这里要逆序
    for (let i = 1; i <= prices.length; i++) {
        for (let j = k; j >= 1; j--) {
            dp[j] = Math.max(dp[j], dpHold[j] + prices[i - 1]);
            dpHold[j] = Math.max(dpHold[j], dp[j - 1] - prices[i - 1]);
        }
    }
    return dp[k];

};