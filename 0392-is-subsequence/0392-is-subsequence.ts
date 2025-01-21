function isSubsequence(s: string, t: string): boolean {
    if (s.length === 0) {
        return true;
    }
    if (t.length < s.length) {
        return false;
    }
    // let dp: boolean[][] = [];
    // for (let i = 0; i < s.length; i++) {
    //     let arr = new Array(t.length).fill(false);
    //     dp.push(arr);
    // }
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = 0; j < t.length; j++) {
    //         if (s[i] === t[j]) {
    //             if (i === 0 || j === 0) {
    //                 dp[i][j] = true;
    //             } else {
    //                 dp[i][j] = dp[i - 1][j - 1];
    //             }
    //         } else {
    //             if (j === 0) {
    //                 dp[i][j] = false;
    //             } else {
    //                 dp[i][j] = dp[i][j - 1];
    //             }
    //         }
    //     }
    // }
    // return dp[s.length - 1][t.length - 1];
    // 用编辑距离来做
    let dp: number[][] = [];
    for (let i = 0; i <= s.length; i++) {
        let arr = new Array(t.length + 1);
        dp.push(arr);
    }
    // 初始化
    for (let i = 0; i <= t.length; i++) {
        dp[0][i] = i;
    }
    for (let i = 0; i <= s.length; i++) {
        dp[i][0] = i;
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = dp[i][j - 1] + 1;
            }
        }
    }
    return t.length - dp[s.length][t.length] === s.length;
};