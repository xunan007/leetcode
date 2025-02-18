function firstMissingPositive(nums: number[]): number {
    // 极限情况下[1,2,3,4,5]的最小正整数是6
    // 可以发现在长度为n的数组中，它的最小正整数范围是[1,n+1]
    // 限定值为a的元素必须要在index=a-1的位置上，于是对于长度为n数组来说，只有值<=n才可能在对应的位置上
    // 所以去遍历数组，让元素能够处在正确的位置上
    // 有个特殊情况，就是元素会出现重复，如果发现要交换的那个位置已经停留了正确的元素，那么就不处理了
    // 最终找到第一个元素不在正确位置上的数组位置
    // 如果找不到，那么就是极限情况
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