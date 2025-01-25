function longestPalindrome(s: string): string {
    let dp: boolean[][] = [];
    for (let i = 0; i < s.length; i++) {
        let arr = new Array(s.length).fill(false);
        arr[i] = true;
        dp.push(arr);
    }
    let result = s[0];
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                if (i + 1 === j) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            } else {
                dp[i][j] = false;
            }
            if (dp[i][j] && result.length < j - i + 1) {
                result = s.slice(i, j + 1);
            }
        }
    }
    return result;
};