function productExceptSelf(nums: number[]): number[] {
    // 前缀和+倒过来算
    const result = new Array(nums.length);
    let sum = 1;
    for (let i = 0; i < nums.length; i++) {
        sum = sum * nums[i];
        result[i] = sum;
    }
    let R = 1;
    result[nums.length - 1] = result[nums.length - 2];
    for (let i = nums.length - 2; i >= 0; i--) {
        R = R * nums[i + 1];
        result[i] = i === 0 ? R : result[i - 1] * R;
    }
    return result;
};
