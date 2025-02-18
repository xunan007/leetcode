function firstMissingPositive(nums: number[]): number {
    // 需要处理的最大值
    let max = nums.length;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] <= max && nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        } else {
            i++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return max + 1;
};