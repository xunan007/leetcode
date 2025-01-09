function rob(nums: number[]): number {
    // 状态定义
    let dp: number[] = new Array(nums.length + 1).fill(0);
    // 初始化
    dp[0] = 0;
    dp[1] = nums[0];
    // 根据状态变量做状态转移
    for (let i = 2; i <= nums.length; i++) {
        // 两种选择：第i间偷，那么i-1不能偷；第i间不偷，那么i-1间可偷可不偷
        dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1]);
    }
    return dp[nums.length];
};