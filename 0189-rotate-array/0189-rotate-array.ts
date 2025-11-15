/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    // 这道题靠翻转数组，先全翻，然后前翻，最后后翻
    // 翻转其实就是头尾交换
    // 如果一个个位置移动，会超时
    nums.reverse();
    const actualK = k % nums.length;
    let l = 0;
    let r = actualK - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }

    l = actualK;
    r = nums.length - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
};
