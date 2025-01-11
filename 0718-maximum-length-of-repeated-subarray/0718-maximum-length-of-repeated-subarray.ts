function findLength(nums1: number[], nums2: number[]): number {
    // let dp: number[][] = [];
    // let result: number = 0;
    // for (let i = 0; i < nums1.length; i++) {
    //     let arr = new Array(nums2.length).fill(0);
    //     dp.push(arr);
    // }
    // for (let i = 0; i < nums1.length; i++) {
    //     for (let j = 0; j < nums2.length; j++) {
    //         if (nums1[i] === nums2[j]) {
    //             // i-1和j-1有可能是负的，这种情况直接当作0来处理就行
    //             if (i === 0 || j === 0) {
    //                 dp[i][j] = 1;
    //             } else {
    //                 dp[i][j] = dp[i - 1][j - 1] + 1;
    //             }
    //             result = Math.max(result, dp[i][j]);
    //         }
    //     }
    // }
    // return result;
    // 二维降一维
    let result: number = 0;
    let dp: number[] = new Array(nums2.length).fill(0);
    for (let i = 0; i < nums1.length; i++) {
        for (let j = nums2.length - 1; j >= 0; j--) {
            if (nums1[i] === nums2[j]) {
                if (i === 0 || j === 0) {
                    dp[j] = 1;
                } else {
                    dp[j] = dp[j - 1] + 1;
                }
                result = Math.max(result, dp[j]);
            } else {
                // 这里很重要，必须还原初始值
                dp[j] = 0;
            }
        }
    }
    return result;
};