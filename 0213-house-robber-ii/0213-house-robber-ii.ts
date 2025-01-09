function rob(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }
    // 拆分成两个状态
    let a = nums.slice(0, nums.length - 1);
    let b = nums.slice(1);
    let dp1 = new Array(a.length + 1).fill(0);
    let dp2 = new Array(b.length + 1).fill(0);
    dp1[1] = a[0];
    dp2[1] = b[0];
    for (let i = 2; i <= a.length; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + a[i - 1]);
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + b[i - 1]);
    }
    return Math.max(dp1[a.length], dp2[b.length]);
};