function lengthOfLIS(nums: number[]): number {
    // 1. 递归+记忆化
    // let cache: number[] = [];
    // const dfs = (i: number): number => {
    //     if (cache[i] !== undefined) {
    //         return cache[i];
    //     }
    //     let result: number = 0;
    //     for (let j = 0; j < i; j++) {
    //         if (nums[j] < nums[i]) {
    //             result = Math.max(dfs(j), result);
    //         }
    //     }
    //     cache[i] = result + 1;
    //     return result + 1;
    // }
    // let result = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     result = Math.max(dfs(i), result);
    // }
    // return result;
    // 2. 递推
    let dp: number[] = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j], dp[i])
            }
        }
        dp[i] = dp[i] + 1;
    }
    return Math.max(...dp);
};