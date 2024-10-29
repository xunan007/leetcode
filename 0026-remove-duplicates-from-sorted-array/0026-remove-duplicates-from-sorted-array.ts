function removeDuplicates(nums: number[]): number {
    let lowIndex = 0;
    let fastIndex = 0;
    let val;
    for (;fastIndex<nums.length;fastIndex++) {
        if (val !== nums[fastIndex]) {
            nums[lowIndex++] = nums[fastIndex];
        }
        val = nums[fastIndex];
    }
    return lowIndex;
};

