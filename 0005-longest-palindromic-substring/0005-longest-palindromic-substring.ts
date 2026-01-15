function longestPalindrome(s: string): string {
    // dp[i][j]表示以i为头，j为尾是否是回文子串
    // 这道题其实不难，搞清楚定义就知道怎么做了
    let dp = [];
    for (let i = 0; i < s.length; i++) {
        dp.push(new Array(s.length).fill(false));
        dp[i][i] = true
    }
    let start = 0;
    let end = 0

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) { // 注意这里的遍历顺序
            if (s[i] === s[j]) {
                dp[i][j] = i + 1 === j ? true : dp[i + 1][j - 1];
            } else {
                dp[i][j] = false;
            }
            if (dp[i][j] && j - i > end - start) {
                [start, end] = [i, j];
            }
        }
    }

    return s.slice(start, end + 1);
};
