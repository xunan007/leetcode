function longestCommonSubsequence(text1: string, text2: string): number {
    // let dp: number[][] = [];
    // for (let i = 0; i < text1.length; i++) {
    //     let arr = new Array(text2.length).fill(0);
    //     dp.push(arr);
    // }
    // for (let i = 0; i < text1.length; i++) {
    //     for (let j = 0; j < text2.length; j++) {
    //         if (text1[i] === text2[j]) {
    //             if (i === 0 || j === 0) {
    //                 dp[i][j] = 1;
    //             } else {
    //                 dp[i][j] = dp[i - 1][j - 1] + 1;
    //             }
    //         } else {
    //             dp[i][j] = Math.max(i === 0 ? 0 : dp[i - 1][j], j === 0 ? 0 : dp[i][j - 1]);
    //         }
    //     }
    // }
    // return dp[text1.length - 1][text2.length - 1];
    // 空间优化
    let dp: number[] = new Array(text2.length).fill(0);
    let prev: number = 0;
    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            let tmp = dp[j];
            if (text1[i] === text2[j]) {
                if (i === 0 || j === 0) {
                    dp[j] = 1;
                } else {
                    dp[j] = prev + 1;
                }
            } else {
                dp[j] = Math.max(i === 0 ? 0 : dp[j], j === 0 ? 0 : dp[j - 1]);
            }
            prev = tmp;
        }
    }
    return dp[text2.length - 1];
};