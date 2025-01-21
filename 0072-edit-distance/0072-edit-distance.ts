function minDistance(word1: string, word2: string): number {
    // 核心
    // 1. 相等时，不操作，直接跳过
    // 2. 不相等时，三个选择（插入/删除/替换）都尝试，取剩余word1/word2最少操作数的那一组
    // let dp: number[][] = [];
    // for (let i = 0; i <= word2.length; i++) {
    //     let arr = new Array(word1.length + 1).fill(0);
    //     dp.push(arr);
    // }
    // // 初始化
    // for (let i = 0; i <= word1.length; i++) {
    //     dp[0][i] = i;
    // }
    // for (let j = 0; j <= word2.length; j++) {
    //     dp[j][0] = j;
    // }
    // // 这里for的逻辑取决于二维数组到底怎么对应word1和word2
    // for (let i = 1; i <= word2.length; i++) {
    //     for (let j = 1; j <= word1.length; j++) {
    //         if (word2[i - 1] === word1[j - 1]) {
    //             dp[i][j] = dp[i - 1][j - 1];
    //         } else {
    //             dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
    //         }
    //     }
    // }
    // return dp[word2.length][word1.length];

    // 滚动数组优化
    let dp: number[] = new Array(word1.length + 1);
    for (let i = 0; i <= word1.length; i++) {
        dp[i] = i;
    }
    let prev: number = 0;
    for (let i = 1; i <= word2.length; i++) {
        // [i][0]初始值
        dp[0] = i;
        for (let j = 1; j <= word1.length; j++) {
            let tmp = dp[j];
            if (word2[i - 1] === word1[j - 1]) {
                dp[j] = prev;
            } else {
                dp[j] = Math.min(dp[j], dp[j - 1], prev) + 1;
            }
            prev = tmp;
        }
        prev = dp[0];
    }
    return dp[word1.length];
};