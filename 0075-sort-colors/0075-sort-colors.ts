/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let i = 0; // [l, i] 表示为 1
    let l = 0; // [0, l-1] 存的都是 0
    let r = nums.length - 1;
    while (i <= r) { // 这个区间里面的数都需要检查
        if (nums[i] === 0) {
            [nums[i], nums[l]] = [nums[l], nums[i]];
            l++;
            i++; // i这个位置不需要再检测了，从左边换过来的一定是1（原地0的情况下，l和i是齐头并进的）
        } else if (nums[i] === 2) {
            [nums[i], nums[r]] = [nums[r], nums[i]];
            r--; // 右边换过来的可能是2，所以需要再检查
        } else {
            i++;
        }
    }
};
