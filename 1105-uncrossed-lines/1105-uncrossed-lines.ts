function maxUncrossedLines(nums1: number[], nums2: number[]): number {
    let dp: number[][] = [];
    for (let i = 0; i < nums1.length; i++) {
        dp.push(new Array(nums2.length).fill(0));
    }
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
            } else {
                dp[i][j] = Math.max(i === 0 ? 0 : dp[i - 1][j], j === 0 ? 0 : dp[i][j - 1]);
            }
        }
    }
    return dp[nums1.length - 1][nums2.length - 1];
};