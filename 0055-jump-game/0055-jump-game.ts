function canJump(nums: number[]): boolean {
    // 初始值是移动一位
    let cover = 1;
    // 最大可移动要覆盖整个数组长度
    let maxCover = nums.length;
    for (let i = 0; i < nums.length && i < cover; i++) {
        cover = Math.max(i + 1 + nums[i], cover);
        // 注意这里是大于等于而不只是等于
        if (cover >= maxCover) {
            return true;
        }
    }
    return false;
};