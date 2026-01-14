function change(amount: number, coins: number[]): number {
    // 1. 正常做法
    // dp[i][j] 表示的是 0-i 的硬币中，能转满 j 的组合数
    // let dp = [];
    // for (let i = 0; i < coins.length; i++) {
    //     dp.push(new Array(amount + 1).fill(0));
    //     dp[i][0] = 1; // 为空的时候有一种组合，就是啥都不取
    // }

    // // 第一行需要初始化
    // for (let j = 1; j <= amount; j++) {
    //     dp[0][j] = j % coins[0] === 0 ? 1 : 0;
    // }

    // for (let i = 1; i < coins.length; i++) {
    //     for (let j = 1; j <= amount; j++) {
    //         // 放不放这个硬币
    //         // 放，需要预留空间，并且前面可能还放这个硬币
    //         // 不放，那么就是不放的和了
    //         dp[i][j] = (j - coins[i] >= 0 ? dp[i][j - coins[i]] : 0) + dp[i - 1][j];
    //     }
    // }

    // return dp[coins.length - 1][amount];

    // 2. 降维
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let j = 1; j <= amount; j++) {
        dp[j] = j % coins[0] === 0 ? 1 : 0;
    }
    // 注意一下这里遍历顺序不用换
    for (let i = 1; i < coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            dp[j] = dp[j] + (j - coins[i] >= 0 ? dp[j - coins[i]] : 0);
        }
    }

    return dp[amount];
};
