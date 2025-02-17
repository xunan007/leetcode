/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;
    // 从低位找到降序子序列的左边第一个数
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    // 降序
    if (i === -1) {
        nums.reverse();
        return;
    }
    // 找到第一个比它大的数，交换
    for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            break;
        }
    }
    // 剩余的数翻转
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
};