function combinationSum4(nums: number[], target: number): number {
    // 这道题直接用爬楼梯的思想来解题
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let j = 1; j <= target; j++) {
        for (let i = 0; i < nums.length; i++) {
            if (j - nums[i] >= 0) {
                dp[j] += dp[j - nums[i]];
            }
        }
    }
    return dp[target];
};
