function isSubsequence(s: string, t: string): boolean {
    if (s.length === 0) {
        return true;
    }
    if (t.length < s.length) {
        return false;
    }
    let dp: boolean[][] = [];
    for (let i = 0; i < s.length; i++) {
        let arr = new Array(t.length).fill(false);
        dp.push(arr);
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                if (i === 0 || j === 0) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            } else {
                if (j === 0) {
                    dp[i][j] = false;
                } else {
                    dp[i][j] = dp[i][j - 1];
                }
            }
        }
    }
    return dp[s.length - 1][t.length - 1];
};