function productExceptSelf(nums: number[]): number[] {
    let result: number[] = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            result[i] = 1;
        } else {
            result[i] = result[i - 1] * nums[i - 1];
        }
    }
    let R = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        R = R * nums[i + 1];
        result[i] = result[i] * R;
    }
    return result;
};