function removeElement(nums: number[], val: number): number {
    let slowIndex = 0;
    let fastIndex= 0;
    for (;fastIndex<nums.length;fastIndex++) {
        if (nums[fastIndex] !== val) {
            // 这段代码是精髓
            // 快指针访问，慢指针写入
            nums[slowIndex++] = nums[fastIndex];
        }
    }
    return slowIndex;
};