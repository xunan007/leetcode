function longestValidParentheses(s: string): number {
    // https://leetcode.cn/problems/longest-valid-parentheses/solutions/314827/shou-hua-tu-jie-zhan-de-xiang-xi-si-lu-by-hyj8/?envType=study-plan-v2&envId=top-100-liked
    // dp[i]的定义是以当前符号为结尾的最长有效括号子串长度
    let dp = new Array(s.length).fill(0);
    let max = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '(') {
            // 第一种情况
            dp[i] = 0;
        } else {
            // 第二种情况：()
            if (s[i - 1] === '(') {
                dp[i] = (dp[i - 2] || 0) + 2;
                max = Math.max(max, dp[i]);
            }
            // 第三种情况（最难理解就是这种情况）：))
            // ()) (()) (()())
            // 直接跨过长度即可
            if (s[i - 1] === ')') {
                if (s[i - dp[i - 1] - 1] === '(') {
                    dp[i] = (dp[i - dp[i - 1] - 2] || 0) + dp[i - 1] + 2;
                    max = Math.max(max, dp[i]);
                }
            }
        }
    }
    return max;
};
