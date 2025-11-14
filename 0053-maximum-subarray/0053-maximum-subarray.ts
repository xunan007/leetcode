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
    // 2025-11-14 前缀和的做法
    // if (nums.length === 1) {
    //     return nums[0];
    // }
    // // 用前缀和找最大和找最小的
    // const prefixSum: number[] = new Array(nums.length);
    // let sum = 0;
    // let min = 0;
    // let result = -Infinity;
    // for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i];
    //     prefixSum[i] = sum;
    //     // 当前值减去前面的最小值
    //     result = Math.max(sum - min, result);
    //     min = Math.min(min, sum);
    // }
    // return result;
};
