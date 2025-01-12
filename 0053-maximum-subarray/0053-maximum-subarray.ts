function maxSubArray(nums: number[]): number {
    // let dp: number[] = new Array(nums.length);
    // dp[0] = nums[0];
    // let result = dp[0];
    // for (let i = 1; i < nums.length; i++) {
    //     dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    //     result = Math.max(result, dp[i]);
    // }
    // return result;
    // 降维
    let prev: number = nums[0];
    let result = prev;
    for (let i = 1; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        result = Math.max(result, prev);
    }
    return result;
};