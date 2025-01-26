function longestValidParentheses(s: string): number {
    if (s.length === 0 || s.length === 1) {
        return 0;
    }
    // 用枚举选谁的思路来做，这里枚举选谁特别依赖于对括号匹配连续性的理解
    let dp: number[] = new Array(s.length).fill(0);
    let result: number = 0;
    // 初始化
    if (s[0] === '(') {
        if (s[1] === ')') {
            dp[1] = 2;
            result = 2;
        }
    } else {
        dp[1] = 0;
    }
    for (let i = 2; i < s.length; i++) {
        if (s[i] === '(') {
            dp[i] = 0;
        } else {
            if (s[i - 1] === '(') {
                dp[i] = dp[i - 2] + 2;
            } else {
                if (s[i - dp[i - 1] - 1] === '(') {
                    if (i - dp[i - 1] - 1 === 0) {
                        dp[i] = dp[i - 1] + 2;
                    } else {
                        dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2;
                    }
                } else {
                    dp[i] = 0;
                }
            }
        }
        result = Math.max(result, dp[i]);
    }
    return result;
};