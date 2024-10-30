function sortedSquares(nums: number[]): number[] {
    if (nums[0] >= 0) {
        return nums.map(x => x * x);
    }

    let l = 0;
    let r = nums.length - 1;
    let result = [];

    while (l <= r) {
        const a = nums[l] * nums[l];
        const b = nums[r] * nums[r];
        if (a > b) {
            result.unshift(a);
            l++;
        } else {
            result.unshift(b);
            r--;
        }
    }

    return result;
};