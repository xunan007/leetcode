function countSubstrings(s: string): number {
    let dp: boolean[][] = [];
    let sum: number = 0;
    for (let i = 0; i < s.length; i++) {
        let arr = new Array(s.length).fill(false);
        arr[i] = true;
        sum++;
        dp.push(arr);
    }
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                // 这里需要特殊处理，不然等式会有问题
                if (i + 1 === j) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            } else {
                dp[i][j] = false;
            }
            if (dp[i][j]) {
                sum++;
            }
        }
    }
    return sum;
};