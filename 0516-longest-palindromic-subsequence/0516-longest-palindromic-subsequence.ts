function longestPalindromeSubseq(s: string): number {
    let dp: number[][] = [];
    // 初始化融合进数组创建
    for (let i = 0; i < s.length; i++) {
        // i>j是非法的，记为0
        let arr = new Array(s.length).fill(0);
        // i===j字符串只有一个，长度是1
        arr[i] = 1;
        dp.push(arr);
    }
    console.log(dp);
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][s.length - 1];
};