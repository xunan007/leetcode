function findLength(nums1: number[], nums2: number[]): number {
    let dp: number[][] = [];
    let result: number = 0;
    for (let i = 0; i < nums1.length; i++) {
        let arr = new Array(nums2.length).fill(0);
        dp.push(arr);
    }
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                // i-1和j-1有可能是负的，这种情况直接当作0来处理就行
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
                result = Math.max(result, dp[i][j]);
            }
        }
    }
    return result;
};