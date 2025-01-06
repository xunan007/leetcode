function combinationSum4(nums: number[], target: number): number {
    let dp: number[] = new Array(target + 1).fill(0);
    dp[0] = 1;
    // 注意这里是先遍历容量再遍历物品
    for (let i = 1; i <= target; i++) {
        for (let j = 1; j <= nums.length; j++) {
            if (i - nums[j - 1] >= 0) {
                dp[i] += dp[i - nums[j - 1]];
            }
        }
    }
    return dp[target];
};