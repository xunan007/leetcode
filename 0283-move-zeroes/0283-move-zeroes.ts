/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    // 核心就是快慢指针
    // 难点在于要统一写的操作
    let lowIndex = 0;
    let fastIndex = 0;
    for (; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== 0) {
            nums[lowIndex++] = nums[fastIndex];
        }
    }
    while (lowIndex < nums.length) {
        nums[lowIndex++] = 0;
    }
};
