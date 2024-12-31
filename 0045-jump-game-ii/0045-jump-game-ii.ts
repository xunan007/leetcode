function jump(nums: number[]): number {
    if (nums.length === 1) {
        return 0;
    }
    let cover = nums[0] + 1;
    let maxCover = nums.length;
    let path: number[] = [cover];
    if (cover >= maxCover) {
        return path.length;
    }
    for (let i = 0; i < maxCover && i < path[path.length - 1]; i++) {
        cover = Math.max(i + 1 + nums[i], cover);
        if (cover >= maxCover) {
            path.push(cover);
            break;
        }
        // 下一步能走到的最大值已经定下来了，那么第二步就可以先跳过去了
        if (i === path[path.length - 1] - 1) {
            path.push(cover);
        }
    }
    return path.length;
};