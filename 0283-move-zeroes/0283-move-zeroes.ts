/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
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