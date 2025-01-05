function findTargetSumWays(nums: number[], target: number): number {
    let result = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    // 如果除2除不尽，那么没有结果
    // sum分解成left+right，两者想减绝对值最大不会超过sum
    if ((sum + target) % 2 !== 0 || Math.abs(target) > sum) {
        return 0;
    }
    sum = (sum + target) / 2;
    let dp: number[] = new Array(sum + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= nums.length; i++) {
        for (let j = sum; j >= 0; j--) {
            if (j - nums[i - 1] >= 0) {
                dp[j] = dp[j] + dp[j - nums[i - 1]];
            }
        }
    }
    return dp[sum];
};