function numSquares(n: number): number {
    let nums: number[] = [0];
    let num: number = 1;
    while (num * num <= n) {
        nums.push(num * num);
        num++;
    }
    // 这里的初始化很有讲究
    let dp: number[] = new Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
        dp[j] = j;
    }
    for (let i = 1; i < nums.length; i++) {
        for (let j = 1; j <= n; j++) {
            if (j - nums[i] >= 0) {
                dp[j] = Math.min(dp[j], dp[j - nums[i]] + 1);
            }
        }
    }
    return dp[n];
};