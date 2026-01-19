function jump(nums: number[]): number {
    // 在一段里面找下一段的最大距离
    // 一旦超过这一段，那么就是跳步
    let border = 0;
    let maxPos = 0;
    for (let i = 0; i < nums.length - 1; i++) { 
        // 因为跳的目标是最后一个，所以最后一个步数如何不用管
        // 并且因为是一定能到达，所以也不用担心到达不了，只需要计算跳了几段就可以了
        maxPos = Math.max(maxPos, nums[i] + i);
        if (i === border) {
            border = maxPos;
            step++;
        }
    }
    return step;
};
