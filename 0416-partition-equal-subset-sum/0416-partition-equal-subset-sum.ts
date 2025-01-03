function canPartition(nums: number[]): boolean {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum % 2 !== 0) {
        return false;
    }
    sum = sum / 2;
    // // 一般做法：二维数组
    // // 初始化dp数组
    // // dp[i][j]的含义是：前i个物品中，能不能装满容量是j的背包
    // let dp: boolean[][] = [];
    // for (let i = 0; i <= nums.length; i++) {
    //     dp.push(new Array(sum+1));
    //     dp[i][0] = true;
    // }
    // for (let j = 0; j <= sum; j++) {
    //     dp[0][j] = false;
    // }
    // for (let i = 1; i <= nums.length; i++) {
    //     for (let j = 1; j <= sum; j++) {
    //         let noSelect = dp[i - 1][j];
    //         let select = false;
    //         if (j - nums[i - 1] >= 0) {
    //             select = dp[i - 1][j - nums[i - 1]];
    //         }
    //         dp[i][j] = select || noSelect;
    //     }
    // }
    // return dp[nums.length][sum];
    // 滚动数组优化
    let dp: boolean[] = new Array(sum + 1);
    dp[0] = true;
    for (let j = 1; j <= sum; j++) {
        dp[j] = false;
    }
    for (let i = 1; i <= nums.length; i++) {
        for (let j = sum; j >= 1; j--) {
            if (j - nums[i - 1] >= 0) {
                dp[j] = dp[j] || dp[j - nums[i-1]];
            }
        }
    }
    return dp[sum];
};